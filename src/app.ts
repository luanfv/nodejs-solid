import fastfiy from 'fastify'
import { PrismaClient } from '@prisma/client'

export const app = fastfiy()

const prisma = new PrismaClient()
