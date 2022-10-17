import {Router} from 'express';
import { rateBook, getBookRate } from '../controllers/rate';

const router = Router();

router.patch('/', rateBook);
router.get('/', getBookRate);

export {
	router as rateRouter
};
