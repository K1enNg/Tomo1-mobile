import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

function SettingBtn({ ...props }) {
  return (
    <TouchableOpacity {...props}>
      <Feather name="settings" color={"#000"} size={24} />
    </TouchableOpacity>
  );
}

export default SettingBtn;
