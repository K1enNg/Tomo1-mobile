import { QUIZ_REGISTRY } from "@/data/registry";

const answers: Record<string, any> = {};

export default function ProcessAnswer(questionId: string, userAnswer: any) {
    const quiz = QUIZ_REGISTRY[questionId];
    if (!quiz) throw new Error(`Invalid question ID: ${questionId}`)

    switch (quiz.type) {
        case "single": {
            answers[questionId] = userAnswer;
            break;
        }
        case "multiple": {
            if (!answers[questionId]) answers[questionId] = [];

            if (!answers[questionId].includes(userAnswer)) {
                answers[questionId].push(userAnswer);
            }
            break;
        }
    }
    console.log(answers)
}