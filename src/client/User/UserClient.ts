import 'cross-fetch/polyfill';
import ApolloClient from "apollo-boost";
import { ApolloError } from 'apollo-server';
import { Service } from 'typedi';

import { User } from '../../model/User';
import { getUserByCpfQuery, UserByCpf } from './UserClientQuery';

@Service('UserClient')
export class UserClient {

  client: ApolloClient<unknown>
  constructor() {
    this.client = new ApolloClient({
      uri: 'http://localhost:4000/graphql'
    })
  }

  async getByCpf(cpf: string): Promise<User> {
    try {
      const response = await this.client.query<UserByCpf>({
        query: getUserByCpfQuery,
        variables: {
          cpf
        }
      })
      return response.data.getUserByCpf
    } catch {
      throw new ApolloError('Usuário não foi encontrado', 'USER_NOT_FOUND')
    }
  }
}
