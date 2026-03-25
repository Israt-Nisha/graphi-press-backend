import { Router } from 'express';
import { UserController } from './user.controller';
import { validateRequest } from '../../middlewares/validationRequest';
import { createDesignerZodSchema } from './user.validation';
import { Role } from '../../../generated/prisma/browser';
import { checkAuth } from '../../middlewares/checkAuth';

const router = Router();

router.post(
    '/create-designer',
    checkAuth(Role.ADMIN),
    validateRequest(createDesignerZodSchema), 
    UserController.createDesigner);

export const UserRoutes = router;
