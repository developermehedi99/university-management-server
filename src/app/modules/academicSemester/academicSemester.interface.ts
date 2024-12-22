export type Months =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type semesterName = 'Autumn' | 'Summer' | 'Fall';
export type semesterCode = '01' | '02' | '03';

export type academicSemester = {
  name: semesterName;
  year: string;
  code: semesterCode;
  startMonth: Months;
  endMonth: Months;
};
