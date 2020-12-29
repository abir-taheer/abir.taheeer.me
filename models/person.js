import mongoose from "./mongoose";

const PersonSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  // Public Id
  picId: String,
  social: {
    facebook: String,
    twitter: String,
    instagram: String,
    github: String,
    linkedIn: String,
    email: String,
  },
});

const Person = mongoose.models.Person || mongoose.model("Person", PersonSchema);

export default Person;
