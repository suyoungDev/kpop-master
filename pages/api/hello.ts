// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    method,
    body: { name },
  } = req;

  switch (method) {
    case 'PATCH':
      res.status(200).json({ name: `name changed to ${name}` });
      break;

    case 'GET':
      res.status(200).json({ name: 'John Doe' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PATCH', 'PUT', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
