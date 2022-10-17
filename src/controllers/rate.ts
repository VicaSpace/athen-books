import { getBookRate as servicesGetBookRates } from "../services/rate";

const db = require('../../models')

async function rateBook(req: any, res: any) {
    const username = req.body.username;
    const bookId = req.body.bookId;
    const rate = req.body.rate;

    const user = await db.User.findOne({where: {name: username}});
    const countBook = await db.Book.count({where: {id: bookId}});
    if (countBook == 0) {
        res.status(404).json({'error': 'Book id is not exists'})
    } else {
        const rateItem = db.Rate.build({'userId': user.id, "bookId": bookId, "rate": rate});
        await rateItem.save();
        res.json(rateItem);
    }
}

async function getBookRate(req: any, res: any) {
    const rate = await servicesGetBookRates(req.body.bookId);
    if (rate == null) {
        res.status(404).json({'error': 'BookId is not exists.'});
    } else {
        res.json({'bookId': req.body.bookId, 'rate': rate});
    }
}

export {
    rateBook,
    getBookRate
}