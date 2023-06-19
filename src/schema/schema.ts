import { mergeTypeDefs } from "@graphql-tools/merge";
import { bookSchema } from "./book.schema";
import { authorSchema } from "./author.schema";

const typeDefs = mergeTypeDefs([bookSchema, authorSchema]);

export { typeDefs };
