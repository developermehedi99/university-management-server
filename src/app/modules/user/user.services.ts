import config from '../../config';
import { academicSemesterModel } from '../academicSemester/academicSemester.model';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';
import { generatedStudentId } from './user.utilis';

const createStudentFormDB = async (password: string, payload: Student) => {
  //create user
  const userData: Partial<TUser> = {};
  //if password is not even, use default password
  userData.password = password || config.default_password;
  //set role
  userData.role = 'student';
  //find academic semester info
  const admissionSemesterInfo = await academicSemesterModel.findById(
    payload.admissionSemester,
  );
  //set generated id
  userData.id = await generatedStudentId(admissionSemesterInfo);
  //create user

  const newUser = await UserModel.create(userData);

  //create student
  if (Object.keys(newUser).length) {
    //set  id, _id as user
    payload.id = newUser.id;
    payload.user = newUser._id;

    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
};

export const userServices = {
  createStudentFormDB,
};
