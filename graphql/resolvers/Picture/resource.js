import CloudinaryResource from "../../../models/cloudinaryResource";
import cloudinaryResourceLoader from "../../../utils/dataloaders/cloudinaryResourceLoader";

export default picture => CloudinaryResource.idLoader.load(picture.resourceId);
