const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

// get contact
router.get("/", (req, res) => {
  res.send("contacted");
});

router.post("/", (req, res) => {
  // smtp is a protocol for sending messages, every email providers support this protocol
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    //  the port of connect
    port: 465,
    auth: {
      user: "onlinesapak@gmail.com",
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: data.email,
    to: "onlinesapak@gmail.com",
    subject: `Message from ${data.name}`,
    html: `
           <h3> Informations </h3>
           <ul>
              <li> Name: ${data.name} </li>
              <li> Email: ${data.email} </li>
           </ul>
           <h3> Message </h3>
           <p> ${data.message} </p>
      
      `,
  };

  smtpTransport.sendMail(mailOptions, (err, response) => {
    try {
      if (err) {
        return res.status(400).json({ msg: err });
      } else {
        return res.status(200).json({ msg: `Message was succesfully sent` });
      }
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  });
});

module.exports = router;
