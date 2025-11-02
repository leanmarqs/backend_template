import { Router } from 'express'
import type { Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.send('Express Server + TypeScript (ESM) + CORS running! 🚀')
})

export default router
