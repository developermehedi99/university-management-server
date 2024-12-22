import { userServices } from './user.services';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  const { password, student } = req.body;
  //const zodParseData = studentValidationSchema.parse(student);

  const result = await userServices.createStudentFormDB(password, student);
  res.status(200).json({
    success: true,
    message: 'student create is successfully done',
    data: result,
  });
});

export const userController = {
  createStudent,
};
