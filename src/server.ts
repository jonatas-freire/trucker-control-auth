import 'reflect-metadata'
import * as tq from 'type-graphql'
import { ApolloServer } from 'apollo-server'
import { DateTimeResolver } from 'graphql-scalars'
import { GraphQLScalarType } from 'graphql'
import { context } from './context'
import { TokenController } from './controller/TokenController'
import { TokenKind } from './model/Token'

const app = async () => {
  tq.registerEnumType(
    TokenKind, {
      name: 'TokenKind'
    }
  )
  
  const schema = await tq.buildSchema({
    resolvers: [
      TokenController
    ],
    scalarsMap: [{
      type: GraphQLScalarType,
      scalar: DateTimeResolver
    }]
  })

  new ApolloServer({
    schema,
    context: context
  })
    .listen({ port: 4001 }, () => {
    console.log(`
      🚀 Server ready at: http://localhost:4000`
    )
  })

}

app()
