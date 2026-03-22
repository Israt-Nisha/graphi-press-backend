import { Router } from "express";
import { AuthController } from "./auth.controller";
import { Role } from "../../../generated/prisma/browser";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router()

router.post("/register", AuthController.registerCustomer)
router.post("/login", AuthController.loginUser)

router.get("/me", checkAuth(Role.ADMIN, Role.DESIGNER, Role.CUSTOMER), AuthController.getMe)

export const AuthRoutes = router;