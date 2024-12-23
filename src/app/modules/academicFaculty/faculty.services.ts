import { AcademicFaculty } from './faculty.interface';
import { AcademicFacultyModel } from './faculty.model';

const createAcademicFacultyIntoDB = async (payload: AcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
  return result;
};

const findAllAcademicFacultyIntoDB = async () => {
  const result = await AcademicFacultyModel.find();
  return result;
};

const singleFacultyIntoDB = async (id: string) => {
  const result = await AcademicFacultyModel.findById(id);
  return result;
};

const updateFacultyIntoDB = async (
  id: string,
  payload: Partial<AcademicFaculty>,
) => {
  const result = await AcademicFacultyModel.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};

export const FacultyServices = {
  createAcademicFacultyIntoDB,
  findAllAcademicFacultyIntoDB,
  singleFacultyIntoDB,
  updateFacultyIntoDB,
};
