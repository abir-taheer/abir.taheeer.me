import mongoose from "./mongoose";
import findOneLoaderFactory from "../utils/dataloaders/findOneLoaderFactory";

const ObjectId = mongoose.Schema.ObjectId;

const AlbumSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  coverPicId: String,
  pictureIds: [ObjectId],
});

AlbumSchema.statics.idLoader = findOneLoaderFactory("Album");
AlbumSchema.statics.urlLoader = findOneLoaderFactory("Album", "url");

const Album = mongoose.models.Album || mongoose.model("Album", AlbumSchema);

export default Album;
