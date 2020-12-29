import CloudinaryResource from "../../../models/cloudinaryResource";

export default person => CloudinaryResource.idLoader.load(person.pictureId);
