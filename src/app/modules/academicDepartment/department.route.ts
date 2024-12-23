import express from 'express';
import validationRequest from '../../middleware/validationMiddleware';
import { academicDepartmentValidation } from './department.validation';
import { DepartmentController } from './department.cotroller';

const router = express.Router();

router.post(
  '/create-academic-department',
  validationRequest(academicDepartmentValidation.createDepartmentValidationZod),
  DepartmentController.createAcademicDepartment,
);

router.get('/:departmentId', DepartmentController.getSingleAcademicDepartment);
router.get('/', DepartmentController.getAllAcademicDepartment);
router.patch(
  '/:departmentId',
  validationRequest(academicDepartmentValidation.updateDepartmentValidationZod),
  DepartmentController.updatedAcademicDepartment,
);

export const DepartmentRouter = router;
