import { mergeResolvers } from "@graphql-tools/merge";
import { bookResolver } from "./book.resolver";
import { authorResolver } from "./author.resolver";

const resolvers = mergeResolvers([bookResolver, authorResolver]);

export { resolvers };
