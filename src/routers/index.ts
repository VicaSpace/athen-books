import { Router } from 'express';
import { seedRouter } from './seed';
import { userRouter } from './users';
import { rateRouter } from './rate';
import { authorRoute } from './author';
import { bookRoute } from './book';

const router = Router();
router.use('/seed', seedRouter)
router.use('/user', userRouter);
router.use('/rate', rateRouter);
router.use('/author', authorRoute);
router.use('/book', bookRoute);

export { router };