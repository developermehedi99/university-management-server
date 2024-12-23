import { academicDepartment } from './department.interface';
import { academicDepartmentModel } from './department.model';

const createAcademicDepartmentIntoDB = async (payload: academicDepartment) => {
  const result = await academicDepartmentModel.create(payload);
  return result;
};

const getallAcademicDepartmentIntoDB = async () => {
  const result = await academicDepartmentModel.find();
  return result;
};

const getSingleAcademicDepartmentIntoDB = async (id: string) => {
  const result = await academicDepartmentModel.findById(id);
  return result;
};

const updatedAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<academicDepartment>,
) => {
  const result = await academicDepartmentModel.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};

export const DepartmentServices = {
  createAcademicDepartmentIntoDB,
  getSingleAcademicDepartmentIntoDB,
  getallAcademicDepartmentIntoDB,
  updatedAcademicDepartmentIntoDB,
};
