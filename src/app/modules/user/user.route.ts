import { Router } from 'express';
import { UserController } from './user.controller';
import { validateRequest } from '../../middlewares/validationRequest';
import { createDesignerZodSchema } from './user.validation';

const router = Router();

router.post(
    '/create-designer',
    validateRequest(createDesignerZodSchema), 
    UserController.createDesigner);

export const UserRoutes = router;
