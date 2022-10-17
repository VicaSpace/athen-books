import {Router} from 'express';
import { registerUser, getUser } from '../controllers/users';

const router = Router();

router.post('/', registerUser);
router.get('/', getUser);

export {
	router as userRouter
};
