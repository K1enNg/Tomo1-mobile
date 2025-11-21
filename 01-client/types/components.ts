import { ImageSourcePropType } from "react-native";

export interface BodyPartsProps {
    progress: number;
    source: ImageSourcePropType;
    text: string;
}

export interface LessonCompletionProps {
    type: "lesson";
    progress?: number;
    title?: string;
    lesson?: string;
    source: ImageSourcePropType;
    descript: string;
    button?: string;
}

export interface InformationProps {
    source: ImageSourcePropType;
    title: string;
    description: string;
    buttonLabels: string[];
    extraText?: string;
    nextScreen?: string;
    skipScreen?: string;
}

export interface QuizTitleProps {
    type: "title";
    progress?: number;
    source?: ImageSourcePropType;
    description?: string;
    btnText?: string;
    time?: boolean;
    next: string;
}
