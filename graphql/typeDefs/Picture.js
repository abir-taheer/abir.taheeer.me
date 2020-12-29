import { gql } from "apollo-server-micro";

export default gql`
  type Picture {
    id: ObjectId!
    title: String
    description: String
    takenAt: DateTime

    # Dynamic Props
    resource: CloudinaryResource
    people: [Person]
  }
`;
