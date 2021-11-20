import { Schema } from 'mongoose';

interface Exercise {
  description: string;
  duration: number;
  date: string;
}

const ExerciseSchema = new Schema({
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true, default: () => new Date() },
});

export { ExerciseSchema, Exercise };
