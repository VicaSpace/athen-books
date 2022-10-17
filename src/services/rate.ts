const db = require('../../models')

async function getBookRate(bookId: number) {
    const rates = await db.Rate.findAll({where: {bookId: bookId}});
    let totalRatePoint = 0;
    const totalRateTime = rates.length;
    const countBook = await db.Book.count({where: {id: bookId}});
    if (countBook == 0) {
        return null;
    } else {
        for (let rate of rates) {
            totalRatePoint += rate.rate;
        }
        return totalRatePoint/totalRateTime;
    }
}

export {
    getBookRate
}