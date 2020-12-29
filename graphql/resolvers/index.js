import Album from "./Album";
import Person from "./Person";

// Scalars
import ObjectId from "graphql-scalar-objectid";
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";

const Resolvers = {
  Album,
  Person,
  // Custom Scalar Types
  ObjectId,
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
};

export default Resolvers;
