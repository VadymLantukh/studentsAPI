import { Router } from 'express';

import {
  createStudentsController,
  deleteStudentsController,
  getAllStudentsContoller,
  getIdStudentController,
  patchStudentController,
  upsertStudentsController,
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isVadlidId } from '../middlewares/isValidId.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createStudentsSchema,
  updateStudentSchema,
} from '../validation/students.js';
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/roles.js';
import { upload } from '../middlewares/multer.js';

const studentsRouter = Router();

studentsRouter.use(authenticate);

studentsRouter.get(
  '/',
  checkRoles(ROLES.TEACHER),
  ctrlWrapper(getAllStudentsContoller),
);

studentsRouter.get(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isVadlidId,
  ctrlWrapper(getIdStudentController),
);

studentsRouter.post(
  '/',
  checkRoles(ROLES.TEACHER),
  isVadlidId,
  upload.single('photo'),
  validateBody(createStudentsSchema),
  ctrlWrapper(createStudentsController),
);

studentsRouter.delete(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  isVadlidId,
  ctrlWrapper(deleteStudentsController),
);

studentsRouter.put(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  isVadlidId,
  upload.single('photo'),
  validateBody(updateStudentSchema),
  ctrlWrapper(upsertStudentsController),
);

studentsRouter.patch(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isVadlidId,
  upload.single('photo'),
  validateBody(updateStudentSchema),
  ctrlWrapper(patchStudentController),
);

export default studentsRouter;
