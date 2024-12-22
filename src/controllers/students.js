import createHttpError from 'http-errors';

import {
  createStudents,
  deleteStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
} from '../services/students.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';
import { saveFileToUploadDir } from '../utils/saveFileToUploadDir.js';
import { env } from '../utils/env.js';
import { saveFileToCloudinary } from '../utils/saveFileToCloudinary.js';

export const getAllStudentsContoller = async (req, res, next) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);

  const students = await getAllStudents({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.status(200).json({
    status: 200,
    data: students,
  });
};

export const getIdStudentController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);

  if (!student) {
    throw createHttpError(404, 'Student not found');
  }

  res.status(200).json({
    message: `Successfully found student with id ${studentId}`,
    data: student,
  });
};

export const createStudentsController = async (req, res, next) => {
  const student = await createStudents(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a studennt',
    data: student,
  });
};

export const deleteStudentsController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await deleteStudent(studentId);

  if (!student) {
    throw createHttpError(404, 'Student id not found');
  }

  res.status(204).send();
};

export const upsertStudentsController = async (req, res, next) => {
  const { studentId } = req.params;

  const result = await updateStudent(studentId, req.body, {
    upsert: true,
  });

  if (!result) {
    throw createHttpError(404, 'Student not found');
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: `Successfully upserted a student!`,
    data: result.student,
  });
};

export const patchStudentController = async (req, res, next) => {
  const { studentId } = req.params;
  const photo = req.file;
  let urlPhoto;

  if (photo) {
    if (env('ENABLE_CLOUDINARY') === 'true') {
      urlPhoto = await saveFileToCloudinary(photo);
    } else {
      urlPhoto = await saveFileToUploadDir(photo);
    }
  }

  const result = await updateStudent(studentId, {
    ...req.body,
    photo: urlPhoto,
  });

  if (!result) {
    throw createHttpError(404, 'Not found student for patch');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully patch a student',
    data: result.student,
  });
};
