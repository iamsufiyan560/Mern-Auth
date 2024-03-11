import express from "express";
import {
  getAllUsers,
  test,
  updateUser,
} from "../controllers/user.controller.js";

import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", test);
router.get("/users", getAllUsers);
router.post("/update/:id", verifyToken, updateUser);

export default router;
