import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudentFormDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const allStudentFormDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFormDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

const deleteStudentFormBD = async (id: string) => {
  const result = await StudentModel.deleteOne({ id });
  return result;
  // const result2 = await StudentModel.updateOne({ id }, { isDeleted: true });
  //return result2;
};

export const studentServices = {
  createStudentFormDB,
  allStudentFormDB,
  getSingleStudentFormDB,
  deleteStudentFormBD,
};
