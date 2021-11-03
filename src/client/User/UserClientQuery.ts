import { gql } from "apollo-server";
import { User } from "../../model/User";

export const getUserByCpfQuery = gql`
  query Query ($cpf: String!) {
    getUserByCpf(cpf: $cpf) {
      id
      email
      cpf
      name
      birthday
      systemAccess
    }
  }
`
export type UserByCpf = {
  getUserByCpf: User
}