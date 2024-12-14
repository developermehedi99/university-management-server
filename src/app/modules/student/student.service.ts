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

export const studentServices = {
  createStudentFormDB,
  allStudentFormDB,
  getSingleStudentFormDB,
};
