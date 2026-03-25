import { Router } from "express";
import { Role } from "../../../generated/prisma/enums";
import { multerUpload } from "../../config/multer.config";
import { validateRequest } from "../../middlewares/validationRequest";
import { createCategoryZodSchema, updateCategoryZodSchema } from "./category.validation";
import { CategoryController } from "./category.controller";
import { checkAuth } from "../../middlewares/checkAuth";
const router = Router();

router.post('/',
    checkAuth(Role.ADMIN),
    multerUpload.single("file"),
    validateRequest(createCategoryZodSchema),
    CategoryController.createCategory);

router.get('/', CategoryController.getAllCategories);

router.patch('/:id',
    checkAuth(Role.ADMIN),
    multerUpload.single("file"),
    validateRequest(updateCategoryZodSchema),
    CategoryController.updateCategory);

router.delete('/:id',
    checkAuth(Role.ADMIN), CategoryController.deleteCategory);

export const CategoryRoutes = router;