import { ApolloServer } from "apollo-server";
import { PORT } from "../config";
import { resolvers } from "./resolvers";
import { typeDefs } from "./schema";

export async function initGraphQLServer() {
	try {
		const server = new ApolloServer({
			typeDefs,
			resolvers,
			subscriptions: {
				path: '/'
			},
            context: (req) => ({
                ...req,
            })
		});

		const { url } = await server.listen({ port: PORT })

		console.log(`🚀  Ehe? Te nanda yo --- ${url}`)
	} catch (e) {
        throw e
    }
}