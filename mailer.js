const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vmbcontactbot@gmail.com',
    pass: 'cycsyH-cyrwan-9cojti'
  }
});

const send = ({ phone }) => {
  var mailOptions = {
    from: 'vmbcontactbot@gmail.com',
    to: 'hermann@vendremaboite.fr',
    subject: 'Demande de Contact | vendremaboite.fr',
    text: 'Téléphone: ' + phone
  };

  return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) =>
          error ? reject(error) : resolve(info)
      )
  })
}

module.exports = send
