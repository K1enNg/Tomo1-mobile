import Button from "@/components/ui/Button";
import CloseBtn from "@/components/ui/CloseBtn";
import ProgressBar from "@/app/progressBar";
import SettingBtn from "@/components/ui/SettingBtn";
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
