import { ApolloServer, startStandaloneServer } from '../deps.ts';
import { schema } from './schema.ts';

async function start() {
	const server = new ApolloServer({ schema });
	const { url } = await startStandaloneServer(server);

	console.log(`🚀  Server is running!
📭  Query at ${url}`);
}

await start();
