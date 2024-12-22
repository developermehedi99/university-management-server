import { Router } from 'express';
import { studentRouter } from '../modules/student/student.route';
import { userRouter } from '../modules/user/user.route';
import { academicSemesterRouter } from '../modules/academicSemester/academicSemester.route';

const router = Router();

router.use('/students', studentRouter);
router.use('/users', userRouter);
router.use('/academic-semester', academicSemesterRouter);

export default router;
