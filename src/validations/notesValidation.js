import { Joi, Segments } from 'celebrate';
import { TAGS } from '../constants/tags';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const getAllNotesSchema = {
  [Segments.BODY]: Joi.object({
    page: Joi.number().integer().min(1).default(1).messages({
      'number.base': 'Page must be a number',
    }),
    perpage: Joi.number().integer().min(5).max(20).default(10).messages({
      'number.base': 'Page must be a number',
    }),
    tag: Joi.string()
      .valid(...TAGS)
      .optional.messages({
        'any.only': `Tag must be one of: ${TAGS.join(', ')}`,
      }),
    search: Joi.string().trim.allow(''),
  }),
};

export const noteIdSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const createNoteSchema = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1).required().messages({
      'string.base': 'Title must be a string',
      'string.min': 'Title cannot be empty',
      'any.required': 'Title is required',
    }),
    content: Joi.string()
      .optional.allow('')
      .messages({ 'string.base': 'Content must be a string' }),
    tag: Joi.string()
      .valid(...TAGS)
      .optional.messages({
        'any.only': `Tag must be one of: ${TAGS.join(', ')}`,
      }),
  }),
};

export const updateNoteSchema = {
  [Segments.PARAMS]: Joi.object({
    noteId: Joi.string().custom(objectIdValidator).required(),
  }),
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(1),
    content: Joi.string().allow(''),
    tag: Joi.string().valid(...TAGS),
  }).min(1),
};
