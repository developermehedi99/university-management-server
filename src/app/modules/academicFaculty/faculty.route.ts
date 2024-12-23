import express from 'express';
import validationRequest from '../../middleware/validationMiddleware';
import { FacultyValidation } from './faculty.validation';
import { FacultyController } from './faculty.controller';

const router = express.Router();

router.post(
  '/create-faculty',
  validationRequest(FacultyValidation.createAcademicFacultyValidation),
  FacultyController.createFaculty,
);
router.get('/', FacultyController.findAllFaculty);
router.get('/:facultyId', FacultyController.findSingleFaculty);
router.patch(
  '/:facultyId',
  validationRequest(FacultyValidation.updateAcademicFacultyValidation),
  FacultyController.updatedFaculty,
);

export const FacultyRouter = router;
