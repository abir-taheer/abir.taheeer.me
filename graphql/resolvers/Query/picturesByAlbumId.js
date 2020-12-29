import Album from "../../../models/album";
import Picture from "../../../models/picture";

export default async (_, { albumId }) => {
  const album = await Album.findById(albumId);

  if (!album) {
    return null;
  }

  return Picture.find({
    _id: { $in: album.pictureIds },
  });
};
