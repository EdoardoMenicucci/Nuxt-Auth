import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, password } = body

  if (!name || !email || !password) {
    throw createError({ statusCode: 400, message: 'Dati mancanti' })
  }

  const userExists = await prisma.user.findUnique({
    where: { email }
  })

  if (userExists) {
    throw createError({ statusCode: 400, message: 'Email già in uso' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  return { message: 'Registrazione completata', user }
})