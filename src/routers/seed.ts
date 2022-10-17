import {Router} from 'express';
import { seedData } from '../controllers/seed';

const router = Router();

router.post('/', seedData);

export {
	router as seedRouter
};
