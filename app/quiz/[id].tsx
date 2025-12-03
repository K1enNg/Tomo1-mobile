import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import Quiz from "@/components/quiz/Quiz";
import { QUIZ_REGISTRY } from "@/data/registry";

const QuizScreen = () => {
    const { id } = useLocalSearchParams();
    const quizData = QUIZ_REGISTRY[id as string];

    if (!quizData) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Quiz not found</Text>
            </View>
        );
    }

    return <Quiz data={quizData} />;
};

export default QuizScreen;
