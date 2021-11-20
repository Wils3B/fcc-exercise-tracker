import { Schema } from 'mongoose';

interface Exercise {
  description: string;
  duration: number;
  date: string;
}

const ExerciseSchema = new Schema(
  {
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: {
      type: Date,
      required: true,
      default: () => new Date(),
      get: (value: Date) => {
        return value.toDateString();
      },
    },
  },
  {
    toJSON: { getters: true },
  },
);

export { ExerciseSchema, Exercise };
