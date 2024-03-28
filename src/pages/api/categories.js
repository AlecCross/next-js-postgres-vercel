// api/categories.js

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const categories = await prisma.categories.findMany()
        res.status(200).json(categories)
    } else {
        res.status(405).json({ message: 'Method Not Allowed' })
    }
}
