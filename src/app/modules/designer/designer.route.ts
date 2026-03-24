import { Router } from 'express';
import { DesignerController } from './designer.controller';
import { checkAuth } from '../../middlewares/checkAuth';
import { Role } from '../../../generated/prisma/browser';

const router = Router();

router.get('/', checkAuth(Role.ADMIN), DesignerController.getAllDesigners);
router.get('/:id', checkAuth(Role.ADMIN), DesignerController.getDesignerById);
router.patch('/:id', checkAuth(Role.ADMIN), DesignerController.updateDesigner);
router.delete('/:id', checkAuth(Role.ADMIN), DesignerController.deleteDesigner);


export const DesignerRoutes = router;
