import { ImageSourcePropType } from "react-native";
import { QuizTitleProps, LessonCompletionProps, InformationProps } from "./components";

export type QuizType = "multiple" | "single";

export interface Quiz {
    questionId: string;
    type: QuizType;
    answer?: any;
    next?: string | boolean;
}

export interface item {
    id: number;
    label: string;
    image: ImageSourcePropType;
}

export interface QuizProps extends Quiz {
    type: "multiple";
    progress: number;
    items: item[];
    description?: string;
    btnText?: string;
    zoom?: boolean;
    audio?: ImageSourcePropType
}

export interface SingleChoiceQuizProps {
    questionId: string;
    image?: ImageSourcePropType;
    title: string;
    audioPlayer?: ImageSourcePropType;
    text: string[];
    choices: string[];
    next: string;
    type: "single";
}

export type QuizData = SingleChoiceQuizProps | QuizProps | QuizTitleProps | LessonCompletionProps;
