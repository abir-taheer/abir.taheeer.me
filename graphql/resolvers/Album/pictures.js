import Picture from "../../../models/picture";

export default album =>
  Promise.all(album.pictureIds.map(id => Picture.idLoader.load(id)));
