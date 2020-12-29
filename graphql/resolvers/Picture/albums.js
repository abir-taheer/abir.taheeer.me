import Album from "../../../models/album";

export default picture => Album.find({ pictureIds: picture.id });
