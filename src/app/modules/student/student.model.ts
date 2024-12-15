import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';
import config from '../../config';

const userNameSchema = new Schema<UserName>({
  fastName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});
const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
    required: true,
  },
  motherContactNo: {
    type: String,
    required: true,
  },
});
const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<Student>(
  {
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: userNameSchema,
    gender: ['male', 'female', 'others'],
    dateOfBirth: { type: String },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String },
    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String },
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: { type: String },
    isActive: ['active', 'block'],
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

//middleware
//pre
studentSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  //pass hashing
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

//post
studentSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

//query method

export const StudentModel = model<Student>('Student', studentSchema);
