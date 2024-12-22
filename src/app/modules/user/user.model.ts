import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const UserSchema = new Schema({
  id: { type: String, require: true, unique: true },
  password: { type: String },
  needsPasswordChange: { type: Boolean, default: true },
  role: { type: String, enum: ['student', 'faculty', 'admin'] },
  status: { type: String, default: 'in-progress' },
  isDeleted: { type: Boolean, default: false },
});

//middleware
//pre
UserSchema.pre('save', async function (next) {
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
UserSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const UserModel = model<TUser>('user', UserSchema);
