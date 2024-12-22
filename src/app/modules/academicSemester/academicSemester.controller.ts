import catchAsync from '../../utils/catchAsync';
import { academicSemesterServices } from './academicSemester.services';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await academicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'academic semester create successfully done',
    data: result,
  });
});

export const academicSemesterController = {
  createAcademicSemester,
};
