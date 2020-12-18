import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY

const sendEmail = async ({ name, clientEmail, emailAddress, propertyAddress, phone}) => {
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
            email: 'team@seoforrealestateinvestors.com',
            name: 'Jerryll'
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