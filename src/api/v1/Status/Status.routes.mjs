import { Router } from 'express';
import StatusController from './Status.controller.mjs';
import AuthMiddleware from '../../../middleware/Auth.middleware.mjs';

const router = Router();

router.get('/v1/status/find/:uniqueId', StatusController.Find_Student_Status);
router.put(
  '/v1/status/update/:uniqueId',
  AuthMiddleware.Admin,
  StatusController.Update_Student_Status_Controller
);

export { router as StatusRouter };
