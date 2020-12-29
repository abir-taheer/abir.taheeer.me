import mongoose from "./mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PictureSchema = new Schema({
  title: String,
  description: String,
  resourceId: String,
  peopleIds: [ObjectId],
  takenAt: Date,
});

const Picture =
  mongoose.models.Picture || mongoose.model("Picture", PictureSchema);

export default Picture;
