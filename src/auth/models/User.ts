import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
  username?: string;
  password: string;
  name: string;
  surname: string;
  role: string;
  calendly_link?: string;
  image: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String},
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  calendly_link: { type: String, required: false },
  image: { type: String, required: true, default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" }
});

export default mongoose.model<IUser>('User', UserSchema);
