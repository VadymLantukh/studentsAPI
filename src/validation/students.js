import Joi from 'joi';
import { genderStudents } from '../constants/students.js';

export const createStudentsSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  age: Joi.number().integer().min(6).max(16).required(),
  gender: Joi.string()
    .valid(...genderStudents)
    .required(),
  avgMark: Joi.number().min(2).max(6).required(),
  onDuty: Joi.boolean(),
  parentId: Joi.string().required(),
});

export const updateStudentSchema = Joi.object({
  name: Joi.string().min(3).max(30).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  email: Joi.string().email(),
  age: Joi.number().integer().min(6).max(16),
  gender: Joi.string().valid(...genderStudents),
  avgMark: Joi.number().min(2).max(6),
  onDute: Joi.boolean(),
});
