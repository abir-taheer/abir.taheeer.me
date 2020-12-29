import ObjectId from "graphql-scalar-objectid";
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";

const Resolvers = {
  ObjectId,
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
};

export default Resolvers;
