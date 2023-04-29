import {NextApiResponse , NextApiRequest} from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
      res.setHeader('Set-Cookie', [
        `jwt=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`,
        `jwt=deleted; path=/api; expires=Thu, 01 Jan 1970 00:00:00 GMT`
      ]);
      
      res.status(200).json({ success: true, message: 'Logged out successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
  