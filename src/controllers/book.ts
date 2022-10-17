import { getBookRate } from "../services/rate";

const db = require('../../models')

async function getAllBooks(req: any, res: any) {
    const books = await db.Book.findAll();
    for (let id in books) {
        const rate = await getBookRate(books[id].id);
        books[id]['rate'] = rate || 0;
    }
    res.json(books);
}

export {
    getAllBooks
}