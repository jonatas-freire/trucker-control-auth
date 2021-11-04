import { Service } from "typedi";
import sgMail from '@sendgrid/mail'
import { ApolloError } from "apollo-server";

@Service("EmailUtils")
export class EmailUtils {

  
  from = 'support@associaja.com.br'
  

  constructor() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')
   }
  
  async sendEmail(to: string, subject: string, body: string): Promise<sgMail.ClientResponse> {
    try {
      const response = await sgMail.send({
        from: this.from,
        to,
        subject,
        html: body
      })
      return response[0]
    } catch {
      throw new ApolloError("Ops! Houve um error ao enviar o email", "EMAIL_ERROR")
    }
  }
}