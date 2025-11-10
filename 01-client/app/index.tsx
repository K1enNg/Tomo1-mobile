import { View } from "react-native";
import SignUp from "./SignUp";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SignUp />
    </View>
  );
}
