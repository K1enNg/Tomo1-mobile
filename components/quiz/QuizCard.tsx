import React from "react";
import { Pressable, Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";

interface QuizCardProps {
    item: {
        id: number;
        label: string;
        image: ImageSourcePropType;
    };
    zoom?: boolean;
    onPress: () => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ item, zoom, onPress }) => {
    return (
        <View style={[zoom ? styles.cardLarge : styles.cardSmall]}>
            <Pressable
                style={[
                    styles.press,
                    {
                        flexDirection: zoom ? "column" : "row",
                        justifyContent: zoom ? "center" : "flex-start",
                    },
                ]}
                onPress={onPress}
            >
                <Image
                    source={item.image}
                    style={zoom ? styles.imageLarge : styles.imageSmall}
                />
                <Text style={zoom ? styles.nunitoLarge : styles.nunitoSmall}>
                    {item.label}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    cardSmall: {
        width: 140,
        height: 55,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        marginHorizontal: 15,
        marginBottom: 3,
        paddingHorizontal: 10,
        flexDirection: "row",
    },
    cardLarge: {
        width: 152,
        height: 200,
        backgroundColor: "white",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginHorizontal: 15,
    },
    imageSmall: {
        width: 35,
        height: 35,
        marginBottom: 5,
        marginRight: 10,
    },
    imageLarge: {
        width: 104,
        height: 104,
    },
    press: {
        alignItems: "center",
        justifyContent: "center",
        width: 162,
        height: 60,
    },
    nunitoSmall: {
        fontFamily: "Nunito-SemiBold",
        color: "#555",
        fontSize: 18,
    },
    nunitoLarge: {
        fontFamily: "Nunito-SemiBold",
        color: "#555",
        fontSize: 25,
    },
});

export default QuizCard;
