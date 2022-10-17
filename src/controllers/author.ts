const db = require('../../models')

async function getAllAuthor(req: any, res: any) {
    const authors = await db.Author.findAll();
    console.log(authors);
    res.json(authors);
}

export {
    getAllAuthor
}