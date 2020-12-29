import { gql } from "apollo-server-micro";

export default gql`
  type SocialMedia {
    facebook: String
    twitter: String
    email: String
    instagram: String
    linkedIn: String
    github: String
  }

  type Person {
    id: ObjectId
    firstName: String
    lastName: String
    social: SocialMedia

    # Dynamic props
    picture: CloudinaryResource
  }
`;
