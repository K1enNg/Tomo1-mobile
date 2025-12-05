import { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
} from "react-native";

interface AnimalCardProps {
  source: ImageSourcePropType;
}

function AnimalCard({ source }: AnimalCardProps) {
  const [selectedItem, setSelectedItem] = useState<boolean>(false);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.cardContainer,
        pressed && { opacity: 0.5 },
        selectedItem && {
          borderColor: "rgba(182, 235, 103, 1)",
        },
      ]}
      onPress={() => setSelectedItem((prev) => !prev)}
    >
      <Image style={styles.image} source={source} />
    </Pressable>
  );
}

export default AnimalCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  image: {
    width: 94,
    height: 94,
  },
});
