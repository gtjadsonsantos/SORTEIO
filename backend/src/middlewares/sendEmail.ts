import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.umbler.com",
  port: 587,
  secure: false,
  auth: { user: process.env.EMAIL || "suporte@jadsonsantos.com", pass:  process.env.PASS || "suporte@jadson" },
});

export default async function sendMail(password: string | undefined,email:string|undefined): Promise<boolean> {
  const mailOptions = {
    to: email,
    from: "suporte@jadsonsantos.com",
    subject: "Recuperação de senha",
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            * {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            html,body {
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
               
            }
            .header {
                background-color: #fff;   
                height: 30%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .header h3 {
                font-family: "Roboto",sans-serif; 
                color: #000;  
                font-size: 2em;
            }
            .main {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 60%;
                margin-top: 30px;
                justify-content: space-between;
            }
            .footer {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 10%;
                margin-top: 30px;
                justify-content: space-around;
            }
    
    
        </style>
    </head>
    <body>
        <header class="header">
            <h3>Pilotando Motos</h3>
        </header>
        <main class="main">
            <p >Olá,</p>
    
            </p>Segue sua senha: ${password}</p>
        </main>
        <footer class="footer">
            <a href="http://pilotandomotos.com.br">http://pilotandomotos.com.br</a></p>
        </footer>
    </body>
    </html>
        `,
  };

  await transporter.sendMail(mailOptions);

  return true;
}
