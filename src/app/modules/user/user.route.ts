import express from 'express';
import { userController } from './user.controler';
import { studentValidations } from '../student/student.validation';
import validationRequest from '../../middleware/validationMiddleware';

const router = express.Router();

router.post(
  '/create-student',
  validationRequest(studentValidations.createStudentValidationSchema),
  userController.createStudent,
);

export const userRouter = router;
