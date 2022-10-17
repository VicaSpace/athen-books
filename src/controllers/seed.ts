import { sequelize } from "../../models";
import { fetchData } from "../services/seed";

const db = require('../../models')

async function seedData(req: any, res: any) {
    const data = await fetchData();
    for (let authorId in data['authors']) {
        const authorItem = db.Author.build(data['authors'][authorId]);
        await authorItem.save();
    }
    for (let bookId in data['books']) {
        const bookItem = db.Book.build(data['books'][bookId]);
        await bookItem.save();
    }
    res.json(data);
}

export {
    seedData
}