import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';

const UserSchema = new Schema({
  id: { type: String, require: true },
  password: { type: String },
  needsPasswordChange: { type: Boolean, default: true },
  role: { type: String, enum: ['student', 'faculty', 'admin'] },
  status: { type: String, default: 'in-progress' },
  isDeleted: { type: Boolean, default: false },
});

export const UserModel = model<TUser>('user', UserSchema);
