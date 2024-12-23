import catchAsync from '../../utils/catchAsync';
import { DepartmentServices } from './department.services';

const createAcademicDepartment = catchAsync(async (req, res) => {
  const result = await DepartmentServices.createAcademicDepartmentIntoDB(
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'department create is successfully done',
    data: result,
  });
});

const getAllAcademicDepartment = catchAsync(async (req, res) => {
  const result = await DepartmentServices.getallAcademicDepartmentIntoDB();
  res.status(200).json({
    success: true,
    message: 'department all find are successfully done',
    data: result,
  });
});

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result =
    await DepartmentServices.getSingleAcademicDepartmentIntoDB(departmentId);
  res.status(200).json({
    success: true,
    message: 'single department is successfully done',
    data: result,
  });
});

const updatedAcademicDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;
  const result = await DepartmentServices.updatedAcademicDepartmentIntoDB(
    departmentId,
    req.body,
  );
  res.status(200).json({
    success: true,
    message: 'updated department is successfully done',
    data: result,
  });
});

export const DepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updatedAcademicDepartment,
};
