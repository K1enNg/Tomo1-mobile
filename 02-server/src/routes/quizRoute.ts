import express from "express";
import { submitTest } from "../controllers/quizController";

const router = express.Router();

router.post("/submit", submitTest);

export const quizRoute = router;
