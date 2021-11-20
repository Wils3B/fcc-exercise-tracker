import { Schema, model } from 'mongoose';
import { ExerciseSchema, Exercise } from './exercise.schema';

interface User {
  username: string;
  id: string;
  count?: number;
  log?: Exercise[];
}

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    log: [{ type: ExerciseSchema }],
  },
  {
    id: true,
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
  },
);
const UserModel = model('users', UserSchema);

export { UserSchema, UserModel, User };
