import { MultiChoiceAnimalProps } from "@/types/components";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimalCard from "../ui/AnimalCard";
import Button from "../ui/Button";
import SettingBtn from "../ui/SettingBtn";

const MultiChoiceQuizAnimal: React.FC<MultiChoiceAnimalProps> = ({
  title,
  btnText,
  subBtnText,
  choices,
  images,
  next,
}) => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <SettingBtn />
      </View>
      <View style={styles.cardContainer}>
        {choices.map((item) => (
          <AnimalCard key={item} source={images[item]} />
        ))}
      </View>
      <View>
        <Button
          style={{ width: 320, marginInline: "auto" }}
          onPress={() => router.push(next as any)}
        >
          {btnText}
        </Button>
        <TouchableOpacity
          style={{ marginInline: "auto", marginBlock: 16 }}
          onPress={() => router.push(next as any)}
        >
          <Text>{subBtnText}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MultiChoiceQuizAnimal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },
  title: {
    color: "#555",
    fontSize: 24,
    fontWeight: 500,
  },
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
});
