import albums from "./albums";
import albumById from "./albumById";
import albumByUrl from "./albumByUrl";
import people from "./people";
import personById from "./personById";
import pictureById from "./pictureById";
import picturesByAlbumId from "./picturesByAlbumId";
import picturesByAlbumUrl from "./picturesByAlbumUrl";

const Query = {
  albumById,
  albumByUrl,
  albums,
  people,
  personById,
  pictureById,
  picturesByAlbumId,
  picturesByAlbumUrl,
};

export default Query;
