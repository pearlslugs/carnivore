import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const sendEmail = async ({ clientEmail, emailAddress, propertyAddress, phone}) => {
    console.log(clientEmail, emailAddress, propertyAddress, phone)
    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                    clientEmail
                }
              ],
              subject: 'You got a Lead!'
            }
          ],
          from: {
            email: 'garrett@seoforrealestateinvestors.com',
            name: 'gary'
          },
          content: [
            {
              type: 'text/html',
              value: `emailAddress: ${emailAddress}\npropertyAddress: ${propertyAddress}\nphone: ${phone}`
            }
          ]
        })
    });
}

export { sendEmail };