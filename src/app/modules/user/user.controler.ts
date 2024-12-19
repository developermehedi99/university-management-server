import { Request, Response } from 'express';
import { studentServices } from '../student/student.service';
import { userServices } from './user.services';

const createStudent = async (req: Request, res: Response) => {
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
    res.status(500).json({
      success: false,
      message: 'something is wrong',
      data: err,
    });
  }
};

export const userController = {
  createStudent,
};
