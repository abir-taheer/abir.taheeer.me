import Person from "../../../models/person";

export default (_, { id }) => Person.findById(id);
