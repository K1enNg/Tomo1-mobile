import { View } from "react-native";
import Button from "./components/button";
import CloseBtn from "./components/closeBtn";
import ProgressBar from "./components/progressBar";
import SettingBtn from "./components/settingBtn";

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
      {/* <SignUp/> */}
      <ProgressBar progress={1} />
      <CloseBtn />
      <SettingBtn />
      <Button>Tiếp tục</Button>
    </View>
  );
}
