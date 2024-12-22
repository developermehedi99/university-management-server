import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
import validationRequest from '../../middleware/validationMiddleware';
import { academicZodValidation } from './academicSemester.Validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validationRequest(academicZodValidation.academicSemesterValidation),
  academicSemesterController.createAcademicSemester,
);

export const academicSemesterRouter = router;
