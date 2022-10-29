import {Router} from 'express'
import { getAllBooks } from '../controllers/book'

const router = Router()

router.get('/', getAllBooks)

export {
    router as bookRoute
}
