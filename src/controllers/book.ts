import book from '../../models/book'
import { getBookRate } from '../services/rate'

const db = require('../../models')

async function getAllBooks(req: any, res: any) {
    const books = await db.Book.findAll()
    for (const id in books) {
        const rate = await getBookRate(books[id].id)
        books[id].dataValues['rate'] = rate || 0
    }
    res.json(books)
}

export {
    getAllBooks
}