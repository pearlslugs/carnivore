import { NextApiRequest, NextApiResponse  } from 'next';

import { sendEmail } from '../../utils/sendEmail';

export default async (req, res) => {
    if(req.method === 'POST') {
      const { name, clientEmail, emailAddress, propertyAddress, phone } = req.body;
      await sendEmail({ name, clientEmail, emailAddress, propertyAddress, phone });
      return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            messgae: "The requested endpoint was not found or doesn't support this method."
        }
    });
}
