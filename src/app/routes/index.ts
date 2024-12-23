import { Router } from 'express';
import { studentRouter } from '../modules/student/student.route';
import { userRouter } from '../modules/user/user.route';
import { academicSemesterRouter } from '../modules/academicSemester/academicSemester.route';
import { FacultyRouter } from '../modules/academicFaculty/faculty.route';
import { DepartmentRouter } from '../modules/academicDepartment/department.route';

const router = Router();

router.use('/students', studentRouter);
router.use('/users', userRouter);
router.use('/academic-semester', academicSemesterRouter);
router.use('/academic-faculty', FacultyRouter);
router.use('/academic-department', DepartmentRouter);

export default router;
