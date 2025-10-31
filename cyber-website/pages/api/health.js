// Simple API route to test Vercel deployment
export default function handler(req, res) {
  res.status(200).json({ 
    status: 'ok', 
    message: 'BizBit Solutions Next.js API is working',
    timestamp: new Date().toISOString()
  })
}