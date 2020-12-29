import CloudinaryResource from "../../../models/cloudinaryResource";

export default album => CloudinaryResource.idLoader.load(album.coverPicId);
