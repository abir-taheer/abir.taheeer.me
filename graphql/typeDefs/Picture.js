import { gql } from "apollo-server-micro";

export default gql`
  type Picture {
    id: ObjectId!
    title: String
    description: String
    takenAt: DateTime

    # Dynamic Props ----
    # Cloudinary Resource Object to facilitate access
    resource: CloudinaryResource
    # The people in the photo
    people: [Person]

    # Albums that contain this photo
    albums: [Album]
  }
`;
