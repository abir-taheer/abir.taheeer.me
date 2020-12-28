import mongoose from "./mongoose";

const ObjectId = mongoose.Schema.ObjectId;

const AlbumSchema = new mongoose.Schema({
  title: String,
  description: String,
  coverPicId: String,
  pictureIds: [ObjectId],
});

const Album = mongoose.models.Album || mongoose.model("Album", AlbumSchema);

export default Album;
