import Album from "../../../models/album";

export default (_, { url }) => Album.findOne({ url });
