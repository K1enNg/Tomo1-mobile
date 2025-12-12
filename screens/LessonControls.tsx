import Button from "../components/common/Button";
import CloseBtn from "../components/ui/CloseBtn";
// import ProgressBar from "./ProgressBar";
import ProgressGroup from "../components/ui/ProgressGroup";
import SettingBtn from "../components/ui/SettingBtn";
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
