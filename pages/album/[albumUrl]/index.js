import Head from "next/head";

import Album from "../../../models/album";
import CloudinaryResource from "../../../models/cloudinaryResource";
import { v2 as cloudinary } from "cloudinary";

export async function getStaticProps({ params: { albumUrl } }) {
  const { title, description, coverPicId } = await Album.findOne({
    url: albumUrl,
  });

  const coverResource = await CloudinaryResource.findById(coverPicId);

  const scaleFactor = coverResource.height / 800;
  const width = Math.floor(coverResource.width / scaleFactor);
  const height = 800;
  const type = coverResource.format;

  const url = cloudinary.url(coverPicId, {
    secure: true,
    height: 800,
    sign_url: true,
    quality: 85,
  });
  const alt = coverResource.tags.join(", ");

  const cover = {
    height,
    width,
    type,
    url,
    alt,
  };

  return {
    props: {
      title,
      description,
      cover,
    },
  };
}

export async function getStaticPaths() {
  /** @type Array */
  const albums = await Album.find();

  return {
    paths: albums.map(a => ({
      params: {
        albumUrl: a.url,
      },
    })),
    fallback: false,
  };
}

export default function Gallery({ title, description, cover }) {
  return (
    <>
      <Head>
        <title>{title} | Abir Taheer</title>
        <meta property="og:title" content={title + " | Abir Taheer"} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={cover.url} />
        <meta property="og:image:secure_url" content={cover.url} />
        <meta property="og:image:type" content={cover.type} />
        <meta property="og:image:width" content={cover.width} />
        <meta property="og:image:height" content={cover.height} />
        <meta property="og:image:alt" content={cover.alt} />
      </Head>
      <img src={cover.url} alt={cover.alt} />
    </>
  );
}
