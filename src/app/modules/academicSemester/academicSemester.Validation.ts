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

export const academicZodValidation = {
  academicSemesterValidation,
};
