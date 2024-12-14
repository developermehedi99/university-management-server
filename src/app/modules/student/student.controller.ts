import {
  Request,
  Params,
} from './../../../../node_modules/@types/express-serve-static-core/index.d';
import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const result = await studentServices.createStudentFormDB(student);
    res.status(200).json({
      success: true,
      message: 'student create is successfully done',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.allStudentFormDB();
    res.status(200).json({
      success: true,
      message: 'student all find done',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFormDB(studentId);
    res.status(200).json({
      success: true,
      message: 'single student find is done',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
