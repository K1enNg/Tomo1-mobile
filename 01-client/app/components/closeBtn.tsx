import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

function CloseBtn({ ...props }) {
  return (
    <TouchableOpacity {...props}>
      <AntDesign name="close-circle" color="#000" size={24} />
    </TouchableOpacity>
  );
}

export default CloseBtn;
