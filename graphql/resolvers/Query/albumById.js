import Album from "../../../models/album";

export default (_, { id }) => Album.findById(id);
