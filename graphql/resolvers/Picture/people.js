import Person from "../../../models/person";

export default picture =>
  Promise.all(picture.personIds.map(id => Person.idLoader.load(id)));
