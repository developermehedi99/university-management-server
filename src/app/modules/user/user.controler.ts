import { NextFunction, Request, Response } from 'express';
import { userServices } from './user.services';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body;
    //const zodParseData = studentValidationSchema.parse(student);

    const result = await userServices.createStudentFormDB(password, student);
    res.status(200).json({
      success: true,
      message: 'student create is successfully done',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const userController = {
  createStudent,
};
