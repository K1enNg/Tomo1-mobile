import { Text, View, StyleSheet, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import ProgressGroup from "../ui/ProgressGroup";
import React, { useState } from "react";
import QuizFrame from "./QuizFrameZoom";
import { QuizProps } from "@/types/quiz";
import ProcessAnswer from "@/utils/QuestionnaireLogic/ProcessLogic";
import QuizCard from "./QuizCard";

const MultiChoiceQuiz: React.FC<QuizProps> = ({
  questionId,
  progress,
  items,
  description,
  btnText,
  zoom,
  next,
  audio,
}) => {
  const router = useRouter();

  const [zoomedItem, setZoomedItem] = useState<any | null>(null);

  const rows = [];
  for (let i = 0; i < items.length; i += 2) {
    rows.push(items.slice(i, i + 2));
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
        }}
      >
        <ProgressGroup progress={progress} />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 340,
          height: 100,
        }}
      >
        <Text
          style={[
            styles.nunitoLight,
            { marginBottom: 10, textAlign: "center" },
          ]}
        >
          {description}
        </Text>
      </View>

      <View style={zoom == true ? styles.layoutLarge : styles.layoutSmall}>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((item) => (
              <QuizCard
                key={item.id}
                item={item}
                zoom={zoom}
                onPress={() => {
                  if (zoom == true) {
                    setZoomedItem(item);
                    ProcessAnswer(questionId, item.id);
                  } else {
                    ProcessAnswer(questionId, item.id);
                  }
                }}
              />
            ))}
          </View>
        ))}

        {zoomedItem && (
          <Modal transparent={true} animationType={"fade"}>
            <Pressable
              onPress={() => setZoomedItem(null)}
              style={styles.overlay}
            >
              <QuizFrame item={zoomedItem} />
            </Pressable>
          </Modal>
        )}

        {zoom == true && audio && (
          <View style={styles.row}>
            <Pressable
              onPress={() => {
                console.log("Play audio");
              }}
            >
              <Image
                source={audio}
                style={{
                  width: 45,
                  height: 45,
                  marginLeft: 280,
                  marginBottom: 35,
                }}
              />
            </Pressable>
          </View>
        )}
      </View>

      {btnText && (
        <View style={styles.button}>
          {btnText && (
            <Pressable
              style={{
                width: 340,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
                backgroundColor: "#fcc555",
              }}
              onPress={() => {
                router.push(next as any);
              }}
            >
              {btnText && (
                <Text style={[styles.nunitoLarge, { textAlign: "center" }]}>
                  {btnText}
                </Text>
              )}
            </Pressable>
          )}
        </View>
      )}
    </View>
  );
};

export default MultiChoiceQuiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cfeef8",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcc555",
    width: 340,
    height: 50,
    borderRadius: 20,
    marginBottom: 30,
  },
  layoutSmall: {
    marginBottom: 30,
  },
  layoutLarge: {
    position: "relative",
  },
  nunitoLight: {
    fontFamily: "Nunito-Light",
    color: "#555",
    fontSize: 16,
  },
  nunitoLarge: {
    fontFamily: "Nunito-SemiBold",
    color: "#555",
    fontSize: 25,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
