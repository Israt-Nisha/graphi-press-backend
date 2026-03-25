import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/user/user.route";
import { DesignerRoutes } from "../modules/designer/designer.route";
import { CategoryRoutes } from "../modules/category/category.router";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/users", UserRoutes);
router.use("/designers", DesignerRoutes);

router.use("/categories", CategoryRoutes);

export const IndexRoutes = router;