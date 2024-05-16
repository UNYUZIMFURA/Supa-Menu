import { TouchableOpacity, Text } from "react-native";

const CustomButton = ({ content, handlePress, otherStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`bg-primary rounded-md w-full justify-center items-center min-h-[50px]`}
    >
      <Text className="text-white font-bold">{content}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
