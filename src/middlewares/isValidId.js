import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isVadlidId = (req, res, next) => {
  const { studentId } = req.params;
  if (!isValidObjectId(studentId)) {
    throw createHttpError(404, `${studentId} is not valid id`);
  }

  next();
};
