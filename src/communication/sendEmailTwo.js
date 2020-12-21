import fetch from 'node-fetch'
import sgMail from '@sendgrid/mail'

const mail = new sgMail();

mail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = async ({ clientEmail, emailAddress, propertyAddress, phone}) => {
    
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