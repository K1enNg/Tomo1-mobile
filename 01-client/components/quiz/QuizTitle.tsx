import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import ProgressGroup from "../ProgressGroup";
import { QuizTitleProps } from "@/types/components";
import Button from "../ui/Button";
import SettingBtn from "../ui/SettingBtn";

const QuizTitle: React.FC<QuizTitleProps> = ({
  title,
  progress,
  source,
  description,
  inputAnswer,
  example,
  quiz,
  note,
  btnText,
  time,
  next,
}) => {
  const router = useRouter();
  const [answer, setAnswer] = useState<number | null>(null);

  useEffect(() => {
    if (!time) return;
    let timer = setTimeout(() => {
      router.push(next as any);
    }, 5000);
    return () => clearTimeout(timer);
  }, [time]);

  useEffect(
    () => console.log("Số câu hỏi bé trả lời được: ", answer),
    [answer]
  );
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
        }}
      >
        {progress && <ProgressGroup progress={progress ?? 0} />}
        {title && (
          <Text
            style={{
              fontWeight: "600",
              fontSize: 32,
              color: "rgba(53, 53, 53, 1)",
            }}
          >
            {title}
          </Text>
        )}
        <SettingBtn />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {source && (
          <Image
            source={source}
            style={{
              width: 256,
              height: 248,
            }}
            contentFit="contain"
          />
        )}
      </View>
      <View style={inputAnswer && { marginBlockStart: -80 }}>
        {description && (
          <Text
            style={[
              styles.nunitoLight,
              { fontSize: 18, textAlign: "center", marginBlockEnd: 20 },
            ]}
          >
            {description}
          </Text>
        )}
        {inputAnswer && (
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setAnswer(Number(text))}
            value={answer !== null ? answer.toString() : ""}
            placeholder="Số câu hỏi bé trả lời được"
            keyboardType="numeric"
          />
        )}
        {example && (
          <>
            <View style={styles.exampleContainer}>
              <Text style={styles.exampleTitle}>Ví dụ</Text>
              <Text>{example}</Text>
            </View>
            <Text>Câu hỏi</Text>
          </>
        )}
        {quiz && <Text>{quiz}</Text>}
        {note && <Text style={{ color: "#555", marginBlock: 16 }}>{note}</Text>}
      </View>
      <View style={{ width: 320, marginBlockEnd: 30 }}>
        {btnText && (
          <Button onPress={() => router.push(next as any)}>{btnText}</Button>
        )}
        {inputAnswer && (
          <TouchableOpacity
            style={{ marginBlockStart: 20, marginInline: "auto" }}
            onPress={() => {
              setAnswer(0);
              router.push(next as any);
            }}
          >
            <Text>Bé không hợp tác</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizTitle;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    padding: 16,
  },
  nunitoLight: {
    fontFamily: "Nunito-Light",
  },
  nunitoSemiBold: {
    fontFamily: "Nunito-SemiBold",
    color: "#555",
  },
  textInput: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    width: 320,
  },
  exampleContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    position: "relative",
    marginBlockEnd: 16,
  },
  exampleTitle: {
    position: "absolute",
    top: -10,
    fontWeight: "bold",
  },
});
