import { model, Schema } from 'mongoose';
import { academicDepartment } from './department.interface';

const academicDepartmentSchema = new Schema<academicDepartment>(
  {
    name: { type: String, required: true, unique: true },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'AcademicFaculty',
    },
  },
  { timestamps: true },
);

academicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExists = await academicDepartmentModel.findOne({
    name: this.name,
  });
  if (isDepartmentExists) {
    throw new Error('this depart name is already done');
  }
  next();
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await academicDepartmentModel.findOne(query);

  if (!isDepartmentExist) {
    throw new Error('This department does not exist! ');
  }

  next();
});

export const academicDepartmentModel = model<academicDepartment>(
  'academicDepartment',
  academicDepartmentSchema,
);
