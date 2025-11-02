import prisma from '../config/prisma.ts'
import { hashPassword } from '../utils/hash.ts'

export const createUser = async (name: string, email: string, password: string) => {
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) throw new Error('Email already exists')

  const hashed = await hashPassword(password)
  return prisma.user.create({
    data: { name, email, password: hashed },
    select: { id: true, name: true, email: true, createdAt: true },
  })
}

export const getAllUsers = () =>
  prisma.user.findMany({ select: { id: true, name: true, email: true, createdAt: true } })

export const getUserById = (id: number) =>
  prisma.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, createdAt: true },
  })

export const updateUser = (id: number, data: any) =>
  prisma.user.update({
    where: { id },
    data,
    select: { id: true, name: true, email: true, createdAt: true },
  })

export const deleteUser = (id: number) => prisma.user.delete({ where: { id } })
