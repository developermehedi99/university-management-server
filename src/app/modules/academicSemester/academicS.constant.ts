import {
  Months,
  semesterCode,
  semesterName,
  TsemesterNameCodeMapper,
} from './academicSemester.interface';
export const monthSchema: Months[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const semesterNameSchema: semesterName[] = ['Autumn', 'Summer', 'Fall'];
export const semesterCodeSchema: semesterCode[] = ['01', '02', '03'];

export const semesterNameCodeMapper: TsemesterNameCodeMapper = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
};
