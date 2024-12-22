import { z } from 'zod';
import {
  monthSchema,
  semesterCodeSchema,
  semesterNameSchema,
} from './academicS.constant';

const academicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...semesterNameSchema] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...semesterCodeSchema] as [string, ...string[]]),
    startMonth: z.enum([...monthSchema] as [string, ...string[]]),
    endMonth: z.enum([...monthSchema] as [string, ...string[]]),
  }),
});

const updateAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...semesterNameSchema] as [string, ...string[]]).optional(),
    year: z.string().optional(),
    code: z.enum([...semesterCodeSchema] as [string, ...string[]]).optional(),
    startMonth: z.enum([...monthSchema] as [string, ...string[]]).optional(),
    endMonth: z.enum([...monthSchema] as [string, ...string[]]).optional(),
  }),
});

export const academicZodValidation = {
  academicSemesterValidation,
  updateAcademicSemesterValidationSchema,
};
