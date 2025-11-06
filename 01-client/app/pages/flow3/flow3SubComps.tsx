import Button from "@/app/components/button";
import CloseBtn from "@/app/components/closeBtn";
import ProgressBar from "@/app/components/progressBar";
import SettingBtn from "@/app/components/settingBtn";
import { View } from "react-native";

function Flow3SubComps() {
  return (
    <View>
      <Button>Tiếp tục</Button>
      <CloseBtn />
      <SettingBtn />
      <ProgressBar progress={0.5} />
    </View>
  );
}

export default Flow3SubComps;
