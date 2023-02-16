import { createTransport } from "nodemailer";

// sendreview for admin 
export const sendMail = async (text) => {

     const Transporter = createTransport({
          host: process.env.SMPT_HOST,
          port: process.env.SMPT_PORT,
          auth: {
               user: process.env.SMPT_USER,
               pass: process.env.SMPT_PASSWORD
          }
     });

     await Transporter.sendMail({ subject: "CONTACT REQUEST FROM PORTFOLIO", to: process.env.MYMAIL, from: process.env.MYMAIL, text });
};