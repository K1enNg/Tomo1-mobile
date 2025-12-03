import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import React from 'react';
import { useRouter } from "expo-router";
import SettingBtn from "../ui/SettingBtn";
import { SingleChoiceQuizProps } from "@/types/quiz";
import ProcessAnswer from "@/utils/QuestionnaireLogic/ProcessLogic";
import { SafeAreaView } from "react-native-safe-area-context";
import QuizOption from "./QuizOption";

const SingleChoiceQuiz: React.FC<SingleChoiceQuizProps> = ({
  questionId,
  image,
  title,
  audioPlayer,
  text,
  choices,
  next
}) => {
  const router = useRouter();
  return (
    <View style={[styles.container, { gap: image == null ? 70 : 30 }]}>

      <SafeAreaView style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}>
        <Text style={[styles.nunitoBold, { fontSize: 27, fontWeight: 900, marginRight: 40 }]}>
          {title}
        </Text>

        {image == null && <SettingBtn />}
      </SafeAreaView>

      <View>
        {
          text.length == 2 && (
            <Text style={[styles.nunitoLight, { fontSize: 18 }]}>
              {text[0]}
            </Text>
          )
        }
      </View>

      <View style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}>
        {<Image
          source={image == null ? audioPlayer : image}
          style={{
            width: image == null ? 320 : 228,
            height: image == null ? 80 : 220,
          }}
        />}
      </View>

      <View style={{
        marginTop: 50
      }}>
        {
          <Text style={[styles.nunitoLight, { fontSize: 18 }]}>
            {text.length == 2 ? text[1] : text[0]}
          </Text>
        }
      </View>

      <View>
        {
          choices.map((choice, idx) => (
            <QuizOption
              key={idx}
              label={choice}
              onPress={() => {
                ProcessAnswer(questionId, choice);
                router.push(next as any);
              }}
            />
          ))}
      </View>

    </View>
  );
}

export default SingleChoiceQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#cfeef8",
  },
  nunitoLight: {
    fontFamily: "Nunito-Light",
    color: "#555",
    textAlign: "center"
  },
  nunitoSemiBold: {
    fontFamily: "Nunito-SemiBold",
    color: "#555",
    textAlign: "center"
  },
  nunitoBold: {
    fontFamily: "Nunito-Bold",
    color: "#555",
    textAlign: "center"
  },
});