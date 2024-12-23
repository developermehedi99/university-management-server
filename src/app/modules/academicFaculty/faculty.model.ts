import { model, Schema } from 'mongoose';
import { AcademicFaculty } from './faculty.interface';

const AcademicFaultySchema = new Schema<AcademicFaculty>(
  {
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const AcademicFacultyModel = model<AcademicFaculty>(
  'academicFaculty',
  AcademicFaultySchema,
);
