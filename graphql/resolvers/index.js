import Album from "./Album";
import CloudinaryResource from "./CloudinaryResource";
import Person from "./Person";
import Picture from "./Picture";
import Query from "./Query";

// Scalars
import ObjectId from "graphql-scalar-objectid";
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";

const Resolvers = {
  Album,
  CloudinaryResource,
  Person,
  Picture,
  Query,

  // Custom Scalar Types
  ObjectId,
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
};

export default Resolvers;
