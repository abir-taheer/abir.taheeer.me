import mongoose from "./mongoose";

const PeopleSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  // Public Id
  picId: String,
  social: {
    facebook: String,
    instagram: String,
    github: String,
    linkedIn: String,
    email: String,
  },
});

const People = mongoose.models.People || mongoose.model("People", PeopleSchema);

export default People;
