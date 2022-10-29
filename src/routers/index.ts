import { Router } from 'express'
import { seedRouter } from './seed'
import { userRouter } from './users'
import { rateRouter } from './rate'
import { authorRoute } from './author'
import { bookRoute } from './book'

const router = Router()
router.use('/seed', seedRouter)
router.use('/user', userRouter)
router.use('/books/:id/rate', rateRouter)
router.use('/authors', authorRoute)
router.use('/books', bookRoute)

export { router }