import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.allStudentFormDB();
    res.status(200).json({
      success: true,
      message: 'student all find done',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.getSingleStudentFormDB(studentId);
    res.status(200).json({
      success: true,
      message: 'single student find is done',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;
    const result = await studentServices.deleteStudentFormBD(studentId);
    res.status(200).json({
      success: true,
      messae: 'student delete is successfully done',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const studentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
