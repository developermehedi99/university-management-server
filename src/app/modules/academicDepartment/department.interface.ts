import { Types } from 'mongoose';

export type academicDepartment = {
  name: string;
  academicFaculty: Types.ObjectId;
};
