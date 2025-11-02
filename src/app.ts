import express from 'express'
import cors from 'cors'
import routes from './routes/index.ts'
import cookieParser from 'cookie-parser'

const app = express()

// 🔧 Middleware CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
)

// Middleware para JSON
app.use(express.json())

// 🍪 Configurar cookie-parser
app.use(cookieParser())

// Rotas
app.use('/', routes)

export default app
