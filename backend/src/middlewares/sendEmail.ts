import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.HOST_EMAIL,
  port: process.env.PORT_EMAIL,
  secure: false,
  auth: { user: process.env.USER_EMAIL, pass: process.env.PASS_EMAIL },
});

export default async function sendMail(
  password: string | undefined
): Promise<boolean> {
  const mailOptions = {
    to: "pilotandomotos@gmail.com.br",
    from: "pilotandomotos@gmail.com.br",
    subject: "Recuperação de senha",
    text: `
         Olá, 
    
         Segue a sua senha do portal pilotandomotos.com, ${password}
        `,
  };

  await transporter.sendMail(mailOptions);

  return true;
}
