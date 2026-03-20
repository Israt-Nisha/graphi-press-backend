import { Router } from 'express';
import { DesignerController } from './designer.controller';

const router = Router();

router.get('/', DesignerController.getAllDesigners);
router.get('/:id', DesignerController.getDesignerById);
router.patch('/:id', DesignerController.updateDesigner);
router.delete('/:id', DesignerController.deleteDesigner);
export const DesignerRoutes = router;
