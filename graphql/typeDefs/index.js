import Query from "./Query";
import scalars from "./scalars";
import Album from "./Album";
import CloudinaryResource from "./CloudinaryResource";
import Person from "./Person";
import Picture from "./Picture";

const typeDefs = [Album, CloudinaryResource, Person, Picture, Query, scalars];

export default typeDefs;
