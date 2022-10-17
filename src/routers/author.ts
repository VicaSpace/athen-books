import {Router} from 'express';
import { getAllAuthor } from '../controllers/author';

const router = Router();

router.get('/', getAllAuthor);

export {
	router as authorRoute
};
