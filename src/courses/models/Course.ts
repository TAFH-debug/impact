import mongoose, { Document, Schema } from 'mongoose';

export interface ICourse extends Document {
  name: string;
  photo: string;
  text: string;
  video: string;
  isPrivate: boolean;
  descr: string;
  users: mongoose.Schema.Types.ObjectId[];
}

const CourseSchema: Schema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, required: true },
  text: { type: String, required: true },
  video: { type: String, required: true },
  descr: {type: String, required: true},
  isPrivate: { type: Boolean, required: true },
  users: [{ type: Schema.Types.ObjectId, required: true }]
});

export default mongoose.model<ICourse>('Course', CourseSchema);
