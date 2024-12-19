import express from 'express';
import { userController } from './user.controler';

const router = express.Router();

router.post('/create-student', userController.createStudent);

export const userRouter = router;
