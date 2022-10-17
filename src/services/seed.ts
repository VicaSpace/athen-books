import axios from "axios";
import { createClassifier } from "typescript";

async function getAllBooks() {
    try {
        const response = await axios('http://3.95.158.224:3000/api/books');
        return response.data;
      } catch (_err) {
        return {
          status: 400,
          message: 'Fact API error',
        };
      }
}

async function getAuthor(id: number) {
    try {
        const response = await axios('http://3.95.158.224:3000/api/book/author/' + id);
        return response.data;
      } catch (_err) {
        return {
          status: 400,
          message: 'Fact API error',
        };
      }
}

async function fetchData() {
    const books = await getAllBooks();
    const promises = [];
    const bookData : any = {}
    const authorData : any = {}
    for (let i = 0; i < books.length; i++) {
        promises.push(axios('http://3.95.158.224:3000/api/book/' + books[i]['id']));
        bookData[books[i]['id']] = books[i];
    }
    return Promise.all(promises).then(async (values) => {
        for (let book of values) {
            bookData[book.data.id].authorId = book.data.authorId;
            bookData[book.data.id].noOfPages = book.data.noOfPages;
            bookData[book.data.id].dateOfPublishing = book.data.dateOfPublishing;
            bookData[book.data.id].illustrator = book.data.illustrator;
            bookData[book.data.id].genre = book.data.genre;
            bookData[book.data.id].publisher = book.data.publisher;

            authorData[book.data.authorId] = {'id' : book.data.authorId};
        }
        for (let authorId in authorData) {
            authorData[authorId] = await getAuthor(authorId as unknown as number);
        }
        return {
            'books': bookData,
            'authors': authorData
        }
    })
}

export {
    fetchData
}