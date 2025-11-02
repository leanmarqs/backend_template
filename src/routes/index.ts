import express from 'express'
import userRoutes from '../routes/user.routes.ts'

const router = express.Router()

router.use('/api/users', userRoutes)

export default router
