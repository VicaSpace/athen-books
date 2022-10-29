import axios from 'axios'
import { createClassifier } from 'typescript'

const seedURL = 'http://172.17.3.14:3000'

async function getAllBooks() {
    try {
        const response = await axios(seedURL + '/api/books')
        return response.data
    } catch (_err) {
        return {
            status: 400,
            message: 'Fact API error',
        }
    }
}

async function getAuthor(id: number) {
    try {
        const response = await axios(seedURL +'/api/book/author/' + id)
        return response.data
    } catch (_err) {
        return {
            status: 400,
            message: 'Fact API error',
        }
    }
}

async function fetchData() {
    const books = await getAllBooks()
    const promises = []
    const bookData : any = {}
    const authorData : any = {}
    for (let i = 0; i < books.length; i++) {
        promises.push(axios(seedURL + '/api/book/' + books[i]['id']))
        bookData[books[i]['id']] = books[i]
    }
    return Promise.all(promises).then(async (values) => {
        for (const book of values) {
            bookData[book.data.id].authorId = book.data.authorId
            bookData[book.data.id].noOfPages = book.data.noOfPages
            bookData[book.data.id].dateOfPublishing = book.data.dateOfPublishing
            bookData[book.data.id].illustrator = book.data.illustrator
            bookData[book.data.id].genre = book.data.genre
            bookData[book.data.id].publisher = book.data.publisher

            authorData[book.data.authorId] = {'id' : book.data.authorId}
        }
        for (const authorId in authorData) {
            authorData[authorId] = await getAuthor(authorId as unknown as number)
        }
        return {
            'books': bookData,
            'authors': authorData
        }
    })
}

function getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
}


async function fetchNames(nameType: string) {
    return await axios('https://www.randomlists.com/data/names-${nameType}.json')
}

async function populateData(numBook: number) {
    const MAX_AUTHOR_ID = 100
    const bookData : any = {}
    let authorData : any = {}

    for (let i = 0; i < numBook; i++) {
        bookData[i] = {
            authorId: getRndInteger(1, MAX_AUTHOR_ID),
            noOfPages: getRndInteger(1, 500),
            dateOfPublishing: Date.now(),
            illustrator: 'name',
            gerne: 'gerne',
            publisher: 'publisher',
            img: 'img'
        }
        authorData[bookData[i].authorId] = {}
    }
    authorData = authorData.map((author: any) => {
        return {
            name: 'name'
        }
    })
}

export {
    fetchData,
    populateData
}