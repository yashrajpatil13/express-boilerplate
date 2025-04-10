import { userBaseURL } from "../controllers/user.controllers.js";
import express from "express"

const router = express.Router();

router.get("/", userBaseURL);

export default router;