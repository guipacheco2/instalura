import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  res.setPreviewData({})

  const key = 'BIRDMAN'

  if (req.query.key !== key) {
    return res.status(401).json({ message: 'Invalid Key to enable preview' })
  }

  res.writeHead(307, { location: '/' })

  return res.end()
}
