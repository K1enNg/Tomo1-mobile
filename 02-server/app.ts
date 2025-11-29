import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { quizRoute } from "./src/routes/quizRoute";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use("/api/quiz", quizRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("This is TOMO backend");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
