import { z } from 'zod';

const createDepartmentValidationZod = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic faculty must be string',
      required_error: 'name must be required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic faculty must be string',
      required_error: 'academic faculty must be required',
    }),
  }),
});

const updateDepartmentValidationZod = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic faculty must be string',
        required_error: 'name must be required',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic faculty must be string',
        required_error: 'academic faculty must be required',
      })
      .optional(),
  }),
});

export const academicDepartmentValidation = {
  createDepartmentValidationZod,
  updateDepartmentValidationZod,
};
