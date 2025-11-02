import type { Request, Response } from 'express'
import * as UserService from '../services/user.service.ts'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Fields name, email, and password are required.' })
    }

    const user = await UserService.createUser(name, email, password)
    res.status(201).json(user)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getUsers = async (_req: Request, res: Response) => {
  const users = await UserService.getAllUsers()
  res.json(users)
}

export const getUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const user = await UserService.getUserById(id)
  if (!user) return res.status(404).json({ error: 'User not found.' })
  res.json(user)
}

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const updated = await UserService.updateUser(id, req.body)
  res.json(updated)
}

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id)
  await UserService.deleteUser(id)
  res.json({ message: 'User successfully deleted.' })
}
