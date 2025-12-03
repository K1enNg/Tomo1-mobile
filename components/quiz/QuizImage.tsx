import React from "react";
import { Image, ImageSourcePropType } from "react-native";

interface QuizImageProps {
    source: ImageSourcePropType;
    width?: number;
    height?: number;
    style?: any;
}

const QuizImage: React.FC<QuizImageProps> = ({ source, width, height, style }) => {
    return (
        <Image
            source={source}
            style={[
                {
                    width: width,
                    height: height,
                },
                style,
            ]}
        />
    );
};

export default QuizImage;
