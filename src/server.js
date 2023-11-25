const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("server Runningg"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aliabdealifakhri53@gmail.com",
    pass: A30344006,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to sendd");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstname + req.body.lastname;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "aliabdealifakhri53@gmail.com",
    subject: "",
    html: `<p>Name: $(name)</p>
            <p>Email: $(email)</p>
            <p>Phone: $(phone)</p>
            <p>Message: $(message)</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
