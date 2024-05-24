import { View, TouchableOpacity, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

const PaymentMethod = ({ name, image, accountNo }) => {
  return (
    <TouchableOpacity className="w-full h-[95px] p-3 flex-row justify-between items-center rounded-md bg-white mt-4">
      <View className="flex-row items-center">
        <View className="h-full w-[75px] rounded-md overflow-hidden">
          <Image source={image} className="h-full w-full object-cover" />
        </View>
        <View className="flex-col gap-y-3 ml-5">
          <Text className="text-secondary font-bold">{name}</Text>
          <Text className="text-third">{accountNo}</Text>
        </View>
      </View>
      <Entypo name="chevron-small-right" size={30} color="#b1b6c8" />
    </TouchableOpacity>
  );
};

export default PaymentMethod;
