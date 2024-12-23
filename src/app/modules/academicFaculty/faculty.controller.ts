import catchAsync from '../../utils/catchAsync';
import { FacultyServices } from './faculty.services';

const createFaculty = catchAsync(async (req, res) => {
  const result = await FacultyServices.createAcademicFacultyIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: 'faculty created successfully done',
    data: result,
  });
});

const findAllFaculty = catchAsync(async (req, res) => {
  const result = await FacultyServices.findAllAcademicFacultyIntoDB();
  res.status(200).json({
    success: true,
    message: 'all faculty finding successfully done',
    data: result,
  });
});

const findSingleFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await FacultyServices.singleFacultyIntoDB(facultyId);
  res.status(200).json({
    success: true,
    message: 'faculty singe find successfully done',
    data: result,
  });
});

const updatedFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await FacultyServices.updateFacultyIntoDB(facultyId, req.body);
  res.status(200).json({
    success: true,
    message: 'faculty updated successfully done',
    data: result,
  });
});

export const FacultyController = {
  createFaculty,
  findAllFaculty,
  findSingleFaculty,
  updatedFaculty,
};
