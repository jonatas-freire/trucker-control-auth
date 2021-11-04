import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { DateTimeResolver } from 'graphql-scalars'
import { GraphQLScalarType } from 'graphql'
import { Context, createContext } from './context'
import { TokenController } from './controller/TokenController'
import { UserAuthController } from './controller/UserAuthController'
import Container, { ContainerInstance } from 'typedi'
import { UserAuthUtils } from './service/UserAuthService'
import { ApolloServerPlugin, GraphQLRequestContext } from 'apollo-server-plugin-base'

const app = async () => {
  
  const schema = await tq.buildSchema({
    resolvers: [
      TokenController,
      UserAuthController
    ],
    scalarsMap: [{
      type: GraphQLScalarType,
      scalar: DateTimeResolver
    }],
    container: Container
  })

  const plugin: ApolloServerPlugin<Context> = {
    requestDidStart(requestContext) {
      return {
        willSendResponse() {
          Container.reset(requestContext.context.requestId)
        },
      }
    }
  }

  const server = new ApolloServer({
    schema,
    context: (params) => {
      const requestId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      const container = Container.of(requestId.toString());
      const context: Context = {
        ...createContext(params),
        requestId: requestId.toString(),
        container
      }
      Container.set("Context", context)
      return context
    },
    plugins: [
      plugin
    ]
  })
    
  const { url } = await server.listen(4001);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
  
}
app()

