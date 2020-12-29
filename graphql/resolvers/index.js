import ObjectId from "graphql-scalar-objectid";
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";
import Album from "./Album";

const Resolvers = {
  Album,

  // Custom Scalar Types
  ObjectId,
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
};

export default Resolvers;
