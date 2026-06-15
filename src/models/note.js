import { Schema } from 'mongoose';
import { model } from 'mongoose';
import { TAGS } from '../constants/tags.js';

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
      enum: TAGS,
    },
  },
  {
    timestamps: true,
  },
);

notesSchema.index({ tag: 1 });

export const Note = model('note', notesSchema);
