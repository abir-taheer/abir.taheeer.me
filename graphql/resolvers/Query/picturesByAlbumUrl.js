import Album from "../../../models/album";
import Picture from "../../../models/picture";

export default async (_, { albumUrl }) => {
  const album = await Album.findOne({ url: albumUrl });

  if (!album) {
    return null;
  }

  return Picture.find({
    _id: { $in: album.pictureIds },
  });
};
