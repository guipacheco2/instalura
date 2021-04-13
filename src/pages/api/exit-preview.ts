import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  res.clearPreviewData()

  res.writeHead(307, { location: '/' })

  return res.end()
}
