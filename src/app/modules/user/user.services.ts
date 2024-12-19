import config from '../../config';
import { Student } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentFormDB = async (password: string, student: Student) => {
  //create user
  const userData: Partial<TUser> = {};
  //if password is not even, use default password
  userData.password = password || config.default_password;
  //set role
  userData.role = 'student';
  //set manually generated id
  userData.id = '20301001';
  //create user

  const newUser = await UserModel.create(userData);

  //create student
  if (Object.keys(newUser).length) {
    //set  id, _id as user
    student.id = newUser.id;
    student.user = newUser._id;

    const newStudent = await StudentModel.create(student);
    return newStudent;
  }
};

export const userServices = {
  createStudentFormDB,
};
