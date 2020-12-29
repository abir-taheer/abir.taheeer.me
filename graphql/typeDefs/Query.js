import { gql } from "apollo-server-micro";

export default gql`
  type Query {
    albums: [Album]
    albumById(id: ObjectId!): Album
    albumByUrl(url: String!): Album

    picturesByAlbumId(albumId: ObjectId!): [Picture]
    picturesByAlbumUrl(albumUrl: String!): [Picture]
    pictureById(id: ObjectId!): Picture

    people: [Person]
    personById(id: ObjectId!): Person
  }
`;
