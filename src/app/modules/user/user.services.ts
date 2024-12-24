import { Student } from './../student/student.interface';
import mongoose from 'mongoose';
import config from '../../config';
import { academicSemesterModel } from '../academicSemester/academicSemester.model';
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
  const admissionSemester = await academicSemesterModel.findById(
    payload.admissionSemester,
  );

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    //set generated id
    userData.id = await generatedStudentId(admissionSemester);
    //create user

    // create a user (transaction-1)
    const newUser = await UserModel.create([userData], { session }); // array

    //create a student
    if (!newUser.length) {
      throw new Error('Failed to create user');
    }
    // set id , _id as user
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    // create a student (transaction-2)

    const newStudent = await StudentModel.create([payload], { session });

    if (!newStudent.length) {
      throw new Error('Failed to create student');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to create student');
  }
};

export const userServices = {
  createStudentFormDB,
};
