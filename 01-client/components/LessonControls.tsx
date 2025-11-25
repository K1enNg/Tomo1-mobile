import Button from "./ui/Button";
import CloseBtn from "./ui/CloseBtn";
// import ProgressBar from "./ProgressBar";
import ProgressGroup from "./ProgressGroup";
import SettingBtn from "./ui/SettingBtn";
import { View } from "react-native";

function LessonControls() {
  return (
    <View>
      <Button>Tiếp tục</Button>
      <CloseBtn />
      <SettingBtn />
      <ProgressGroup progress={0.5} />
    </View>
  );
}

export default LessonControls;
