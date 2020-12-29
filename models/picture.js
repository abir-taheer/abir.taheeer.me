import mongoose from "./mongoose";
import findOneLoaderFactory from "../utils/dataloaders/findOneLoaderFactory";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PictureSchema = new Schema({
  title: String,
  description: String,
  resourceId: String,
  personIds: [ObjectId],
  takenAt: Date,
});

PictureSchema.statics.idLoader = findOneLoaderFactory("Picture");

const Picture =
  mongoose.models.Picture || mongoose.model("Picture", PictureSchema);

export default Picture;
