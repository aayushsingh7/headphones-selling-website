import {NextApiResponse , NextApiRequest} from 'next'
import { NextResponse } from 'next/server';
const nodemailer = require('nodemailer')


const sendResetPasswordMail = async (name:string, sendEmail:string, body:string , res:NextApiResponse ) => {
  const html =  `
  <div style={display:"flex",align-items:"center",justify-content:"center"}>
  <h1>Feedback Received From Customer</h1>
   <div style={width:"100%",margin-top:"20px"}>
   <p>Sender: ${name}</p>
   <p>Sender email: ${sendEmail}</p>
   </div>
   <div style={margin-top:"20px"}><h2>Message Body:- </h2>
    <p>${body}</p>/div>
  </div>
  `;

  // Send Email To The ADMIN
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const mailOption = {
    from: process.env.SMTP_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: "For Reset Password",
    html: html,
  };
  transporter.sendMail(mailOption, function (err:any, info:any) {
    if (err) {
      res.status(500).send({success:false , msg:"Something Went Wrong"})
    } 
  });
};

const contactAdmin = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const { name, email, body } = req.body;
      await sendResetPasswordMail(name, email, body, res);
      res.status(200).send({
        success: true,
        message: "Feedback send successfully",
        user: {
          name: name,
          email: email,
          body: body,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(500).send({ success: false, message: err });
    }
  };



export default contactAdmin