const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());

const isEmpty = (string) => (string.trim() === "" ? true : false);
const isEmail = (email) =>
  email.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
    ? true
    : false;

app.post("/", async (req, res) => {
  if (isEmpty(req.body.email) || !isEmail(req.body.email)) {
    return res.status(400).json({ rejected: true });
  }
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "apikey", // generated ethereal user
      pass:
        "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", // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // send mail with defined transport object
  let info = await transporter
    .sendMail({
      from: "Luke <lukefran77@gmail.com>", // sender address
      to: "info.ithubgroup@gmail.com", // list of receivers
      subject: "Contact/FeedBack Service", // Subject line
      text: `Message from ${req.body.email}`, // plain text body
      html: `Message from ${req.body.email}<br>Content- ${req.body.content}`, // html body
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ err });
    });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  res.status(200).json({ acknowleged: true });
});

app.listen(3000, (err) => {
  if (err) console.error(err);
  console.log(`Application Worker ${process.pid} started!`);
});
