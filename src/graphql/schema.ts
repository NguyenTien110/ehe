import { gql } from "apollo-server";

export const typeDefs = gql`

scalar JSON

    type Query {
        hi_there: String,
        my_boxes(privateKey: String!): JSON
    }

    type Mutation {
        open_boxes(amount: Int!, privateKey: String!): JSON
        approve_anything(privateKey: String!): JSON
    }
`