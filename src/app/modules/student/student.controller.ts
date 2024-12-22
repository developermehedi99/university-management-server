import { studentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';

const getAllStudent = catchAsync(async (req, res) => {
  const result = await studentServices.allStudentFormDB();
  res.status(200).json({
    success: true,
    message: 'student all find done',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.getSingleStudentFormDB(studentId);
  res.status(200).json({
    success: true,
    message: 'single student find is done',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteStudentFormBD(studentId);
  res.status(200).json({
    success: true,
    message: 'student delete is successfully done',
    data: result,
  });
});

export const studentController = {
  getAllStudent,
  getSingleStudent,
  deleteStudent,
};
