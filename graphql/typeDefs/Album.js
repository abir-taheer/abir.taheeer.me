import { gql } from "apollo-server-micro";

export default gql`
  type Album {
    id: ObjectId!
    url: String
    title: String
    description: String

    # Dynamic Props
    cover: CloudinaryResource
    pictures: [Picture]
  }
`;
