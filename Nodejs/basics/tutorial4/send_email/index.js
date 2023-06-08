var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "Mohamed.Benhammo@student.intecbrussel.be",
    pass: "MohamedB-563N",
  },
});

var mailOptions = {
  from: "Mohamed.Benhammo@student.intecbrussel.be",
  to: "verouyafefra-5775@yopmail.com, Mohamed.Benhammo@student.intecbrussel.be",
  subject: "Sending Email using Node.js",
//   text: "That was easy Dudde !",
// For send html proprety => 
html: '<h1>Welcome</h1><p>That was easy Dudde !</p>'  
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
