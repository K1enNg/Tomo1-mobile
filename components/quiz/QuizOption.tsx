import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface QuizOptionProps {
    label: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const QuizOption: React.FC<QuizOptionProps> = ({ label, onPress, style, textStyle }) => {
    return (
        <Pressable onPress={onPress} style={[styles.option, style]}>
            <Text style={[styles.text, textStyle]}>{label}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    option: {
        width: 330,
        height: 44,
        backgroundColor: "white",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    text: {
        fontFamily: "Nunito-Light",
        color: "#555",
        fontSize: 18,
        textAlign: "center",
    },
});

export default QuizOption;
