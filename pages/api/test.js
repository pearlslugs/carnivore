const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function(req, res) {
  

  const {clientEmail, emailAddress, propertyAddress, phone } = req.body
    console.log(clientEmail, emailAddress, propertyAddress, phone)
  const content = {
    to: clientEmail,
    from: "garrett@seoforrealestateinvestors.com",
    subject: "you got a lead",
    text: `emailAddress: ${emailAddress}\npropertyAddress: ${propertyAddress}\nphone: ${phone}`,
    html: `<p>${emailAddress}<br />${propertyAddress}<br />${phone}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.error(error)
    console.log(error.response.body)
    
    res.status(400).send(error, res)
  }
}