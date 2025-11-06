import { View } from "react-native";
import Flow3 from "./pages/flow3/flow3";

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
      {/* <SignUp /> */}
      <Flow3 />
    </View>
  );
}
