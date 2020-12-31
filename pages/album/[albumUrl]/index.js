import Head from "next/head";

import Album from "../../../models/album";
import Picture from "../../../models/picture";
import CloudinaryResource from "../../../models/cloudinaryResource";
import { v2 as cloudinary } from "cloudinary";
import styles from "../../../styles/layout.module.css";
import PictureGrid from "../../../comps/album/PictureGrid";

function normalizeResource(resource, height = 500) {
  const scaleFactor = resource.height / height;
  const width = Math.floor(resource.width / scaleFactor);
  const format = resource.format;

  const tags = resource.tags;
  const url = cloudinary.url(resource.id, {
    secure: true,
    sign_url: true,
    quality: 85,
    height,
  });

  return {
    height,
    width,
    format,
    url,
    tags,
  };
}

export async function getServerSideProps({ params: { albumUrl } }) {
  const album = await Album.findOne({
    url: albumUrl,
  });

  const { title, description, coverPicId, pictureIds } = album;

  const coverResource = await CloudinaryResource.findById(coverPicId);

  const pictures = await Picture.find({ _id: { $in: pictureIds } });

  const completePictures = await Promise.all(
    pictures.map(async ({ id, resourceId }) => ({
      id,
      resource: normalizeResource(
        await CloudinaryResource.idLoader.load(resourceId),
        500
      ),
    }))
  );

  return {
    props: {
      title,
      description,
      cover: normalizeResource(coverResource),
      pictures: completePictures,
    },
  };
}

export default function AlbumPage({ title, description, cover, pictures }) {
  return (
    <>
      <Head>
        <title>{title} | Abir Taheer</title>
        <meta property="og:title" content={title + " Album | Abir Taheer"} />
        <meta property="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={cover.url} />
        <meta property="og:image:secure_url" content={cover.url} />
        <meta property="og:image:type" content={cover.type} />
        <meta property="og:image:width" content={cover.width} />
        <meta property="og:image:height" content={cover.height} />
        <meta property="og:image:alt" content={cover.tags?.join(", ")} />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>{title}</h1>

          <div className={styles.albumContainer}>
            <PictureGrid pictures={pictures} />
          </div>
        </main>
      </div>
    </>
  );
}
