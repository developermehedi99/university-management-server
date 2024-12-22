import { semesterNameCodeMapper } from './academicS.constant';
import { academicSemester } from './academicSemester.interface';
import { academicSemesterModel } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: academicSemester) => {
  if (semesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid code');
  }
  const result = await academicSemesterModel.create(payload);
  return result;
};
const getAllAcademicSemestersFromDB = async () => {
  const result = await academicSemesterModel.find();
  return result;
};

const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await academicSemesterModel.findById(id);
  return result;
};

const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<academicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    semesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await academicSemesterModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
