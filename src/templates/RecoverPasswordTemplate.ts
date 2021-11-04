
export const RecoverPasswordTemplate = (
  token: string,
  name: string
) => `
  <!DOCTYPE html>
  <html>
      <head>
          <link rel='preconnect' href='https://fonts.gstatic.com'>
          <link href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap' rel='stylesheet'>
          <meta charset=UTF-8>
          <style>
              *{
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
              }
              p{
                  margin-top: 30px;
              }
          </style>
      </head>
      <div style='padding: 0 5px 0 5px; font-family: 'Open Sans', sans-serif; background-color: #fbfdff;'>
          <div style='width: 525px; margin: auto;'>
              <div style='width: 525px; height: 195px;'>
                      <img style='width: 100%; object-fit: cover; height: 195px;' src='https://res.cloudinary.com/associaja-bucket/image/upload/v1618115571/static_images/trucker_email_ctaqkf.png' alt='Traseira de caminhão'/>
              </div>
              <div style='width: 525px; padding: 35px 30px 60px 30px; background-color: #0f263b; '>
                  <div style='width: 435px; margin: auto;'>
                      <h1 style='color: white; font-size: 24px;'>Estamos quase lá</h1>
                      <p style='font-size: 16px; color: white;'>Olá, ${name}</p>
                      <P style='font-size: 16px; color: white;'>A requisição de redefinição de senha foi realizada com sucesso.</P>
                      <p style='font-size: 16px; color: white;'>Para realizar o processo precisamos que defina a sua <strong>nova senha</strong> de acesso!</p>

                      <a
                          href="${
                            process.env.IS_PROD == 'true' ?
                              'https://sistema.associaja.com.br' : 'http://localhost:3000'
                          }/reset-password?auth=${token}"
                          style="border-radius: 5px; text-decoration:none; width: 100%; height: 53px; padding: 17px 0; background-color: #3EA2F9; display: block; text-align: center; font-size: 14px; color: white; font-weight: 600;"
                      >Realizar a redefinição de senha</a>

                      <p style='font-size: 16px; color: white; margin-bottom: 30px;'>Caso tenha dúvidas sobre este processo, entre em contato com a secretaria da associação.</p>
                      <p style='font-size: 16px; color: #3EA2F9; font-weight: bold;'>Att, <br>Equipe Associajá</p>
                  </div>
              </div>
          </div>
      </div>
  </html>
`