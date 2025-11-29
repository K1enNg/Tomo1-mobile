import { Request, Response } from "express";
import questions from "../quiz.json";

export const submitTest = async (req: Request, res: Response) => {
  try {
    const { childrenId, answers } = req.body;

    //Trả lỗi nếu không có kết quả từ req
    if (!answers) {
      return res.status(400).json({ message: "Thiếu kết quả" });
    }

    let score = 0;
    const results: {
      question_id: any;
      user_answer: any;
      correct_answer: any;
    }[] = [];

    //Lặp qua từng ans của req để kiểm tra
    answers.forEach((ans: any) => {
      const q = (questions as any[]).find((item) => item.id === ans.questionId);

      if (!Array.isArray(answers)) {
        return res
          .status(400)
          .json({ message: "Thiếu hoặc sai định dạng answers" });
      }

      if (!q) return res.status(404).json({ message: "Câu hỏi không tồn tại" });

      const userAns = ans.answer;
      switch (q.type) {
        case "yes_no":
          // Nếu trả lời có sẽ + 5 đ còn lại thì ko +
          if (userAns === "yes") {
            score += 5;
          }
          break;
        case "flashcard_animal":
        case "flashcard_body":
          // Kiểm tra các câu trả lời user có trong correct_ans của db hay không. Nếu có sẽ cộng điểm
          if (!Array.isArray(userAns)) {
            return res
              .status(400)
              .json({ message: "Flashcard phải trả về dạng mảng" });
          }
          const correctCount = userAns.filter((x: string) =>
            q.correct_answer.includes(x)
          ).length;

          score += correctCount;
          break;
        case "number_select":
          //Nếu đếm đúng sẽ cộng điểm.
          if (userAns === q.correct_answer) score += 5;
          break;
        default:
          score += 0;
      }

      results.push({
        question_id: q.id,
        user_answer: ans.answer,
        correct_answer: q.correct_answer,
      });
    });

    //trả về điểm với details là bản so sánh giữa ans req và ans trong db.
    res.status(200).json({ childrenId, score, details: results });
  } catch (error) {
    console.log("Loi khi tinh diem quiz", error);
    res.status(500).json({ message: "Lỗi hệ thống" });
  }
};
