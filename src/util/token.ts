import { verify } from 'jsonwebtoken'
import { Context } from '../context'

export const APP_SECRET = process.env.APP_SECRET || ''

interface Token {
  userId: string
}


export const validateUser = (context: Context) => {
  const authHeader = context.req.get('Authorization')
  if (authHeader) {
    const token = authHeader.replace('Bearer', '')
    const isValidToken = verify(token, APP_SECRET) as Token
    return isValidToken && isValidToken.userId
  }

}