import { addMocksToSchema, makeExecutableSchema } from '../deps.ts';
import { mocks } from './mocks.ts';

export const typeDefs = `#graphql
type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
}
"A track is a group of Modules that teaches about a specific topic"
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
}

"Author of a complete Track or a Module"
type Author {
    id: ID!
    name: String!
    photo: String
}
`;

export const schema = addMocksToSchema({
	schema: makeExecutableSchema({ typeDefs }),
	mocks,
});
