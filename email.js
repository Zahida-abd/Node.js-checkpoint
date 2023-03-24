var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'snowangel1321992@gmail.com',
    pass: 'type here'
  }
});

var mailOptions = {
  from: 'snowangel1321992@gmail.com',
  to: 'zahida.abd@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Done !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});