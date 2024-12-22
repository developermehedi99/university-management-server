import { model, Schema } from 'mongoose';
import { academicSemester } from './academicSemester.interface';
import {
  monthSchema,
  semesterCodeSchema,
  semesterNameSchema,
} from './academicS.constant';

const academicSemesterSchema = new Schema<academicSemester>(
  {
    name: { type: String, required: true, enum: semesterNameSchema },
    year: { type: String, required: true },
    code: { type: String, required: true, enum: semesterCodeSchema },
    startMonth: { type: String, required: true, enum: monthSchema },
    endMonth: { type: String, required: true, enum: monthSchema },
  },
  { timestamps: true },
);

//cheking semester name/year are same
academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExists = await academicSemesterModel.findOne({
    name: this.name,
    year: this.year,
  });
  if (isSemesterExists) {
    throw new Error('not valid semester');
  }
  next();
});

export const academicSemesterModel = model<academicSemester>(
  'academicSemester',
  academicSemesterSchema,
);
