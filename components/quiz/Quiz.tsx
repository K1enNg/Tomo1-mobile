import React from "react";
import { QuizData } from "@/types/quiz";
import SingleChoiceQuiz from "./SingleChoiceQuiz";
import MultiChoiceQuiz from "./MultiChoiceQuiz";
import QuizTitle from "./QuizTitle";
import LessonCompletion from "../LessonCompletion";

interface QuizComponentProps {
    data: QuizData;
}

const Quiz: React.FC<QuizComponentProps> = ({ data }) => {
    switch (data.type) {
        case "single":
            return <SingleChoiceQuiz {...data} />;
        case "multiple":
            return <MultiChoiceQuiz {...data} />;
        case "title":
            return <QuizTitle {...data} />;
        case "lesson":
            return <LessonCompletion {...data} />;
        default:
            return null;
    }
};

export default Quiz;
