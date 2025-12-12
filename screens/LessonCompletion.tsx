import Button from "../components/common/Button";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CloseBtn from "../components/ui/CloseBtn";
import ProgressGroup from "../components/ui/ProgressGroup";
import { LessonCompletionProps } from "@/types/components";

const LessonCompletion: React.FC<LessonCompletionProps> = ({
  progress,
  source,
  title,
  lesson,
  descript,
  button,
}) => {
  const router = useRouter();
  const testBtn = () => router.push("/bodyParts");

  return (
    <SafeAreaView style={styles.container}>
      {!progress ? (
        <CloseBtn onPress={testBtn} />
      ) : (
        <ProgressGroup progress={0.5} />
      )}

      {(title || lesson) && (
        <View>
          {title && <Text style={styles.title}>{title}</Text>}
          {lesson && <Text style={styles.lesson}>{lesson}</Text>}
        </View>
      )}
      <View>
        <Image source={source} style={styles.img} />
        <Text style={styles.descript}>{descript}</Text>
      </View>
      {button && (
        <Button style={styles.button} onPress={testBtn}>
          {button}
        </Button>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 48,
    textAlign: "center",
  },
  lesson: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 32,
  },
  img: {
    marginInline: "auto",
  },
  descript: {
    textAlign: "center",
    fontSize: 16,
    marginBlockStart: 16,
  },
  button: {
    width: "100%",
    marginBottom: 32,
    maxWidth: 600,
    marginInline: "auto",
  },
});

export default LessonCompletion;
