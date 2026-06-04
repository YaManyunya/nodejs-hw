import { Schema } from 'mongoose';
import { model } from 'mongoose';

const notesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true, // прибирає пробіли на початку та в кінці
    },
    content: {
      type: String,
      default: '',
      required: false,
      trim: true,
    },
    tag: {
      type: String,
      default: 'Todo',
      required: false,
      enum: [
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
      ],
    },
  },
  {
    timestamps: true,
  },
);

export const Note = model('note', notesSchema);
