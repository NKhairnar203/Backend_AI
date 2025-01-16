import { Router } from "express";
import { body } from "express-validator";
import * as userController from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.meddleware.js";

const router = Router();

router.post(
  "/register",
  body("name").isString().withMessage("Please Enter Your Name"),
  body("email").isEmail().withMessage("Email must be a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password Must be at least 6 character long"),
  userController.createUserController
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Email must be a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  userController.loginController
);

router.get("/profile", authUser, userController.profileController);

router.get("/logout", authUser, userController.logoutController);

export default router;
