import express from "express";
import { adminLogin } from "../controllers/adminController.js";

const router = express.Router();

router.get("/login", adminLogin);

export default router;
