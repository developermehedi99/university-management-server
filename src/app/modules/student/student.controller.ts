import { Request, Response } from 'express';
import { studentServices } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const zodParseData = studentValidationSchema.parse(student);

    const result = await studentServices.createStudentFormDB(zodParseData);
    res.status(200).json({
      success: true,
      message: 'student create is successfully done',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something is wrong',
      data: err,
    });
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
    res.status(500).json({
      success: false,
      message: 'something is wrong',
      data: err,
    });
  }
};

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.deleteStudentFormBD(studentId);
    res.status(200).json({
      success: true,
      messae: 'student delete is successfully done',
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
  deleteStudent,
};
