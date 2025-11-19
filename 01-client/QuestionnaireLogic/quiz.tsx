import { ImageSourcePropType } from "react-native";

export type QuizType = "text" | "number" | "multiple" | "single";

export interface Quiz {
    questionId: string;
    type: QuizType;
    answer?: any;
}

export interface item {
    id: number;
    label: string;
    image: ImageSourcePropType;
}

export interface QuizProps extends Quiz {
    progress: number;
    items: item[];
    description?: string;
    btnText?: string;
    zoom?: boolean;
    next?: string;
    audio?: ImageSourcePropType
}