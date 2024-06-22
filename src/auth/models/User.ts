import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  username?: string;
  password: string;
  name: string;
  surname: string;
  role: string;
  calendly_link?: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String},
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  calendly_link: { type: String, required: false }
});

export default mongoose.model<IUser>('User', UserSchema);
