import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const TopFood = ({ name, image }) => {
  return (
    <View className="h-[95px] w-full flex-row px-3 py-2 bg-[#1010470e] rounded-md mt-3">
      <View className="h-full w-[75px] bg-third rounded-md overflow-hidden">
        <Image
          source={image}
          alt=""
          resizeMethod="cover"
          className="w-full h-full"
        />
      </View>
      <TouchableOpacity className="ml-5" onPress={() => router.push("/home")}>
        <Text className="text-secondary font-bold">{name}</Text>
        <Text className="text-third text-xs mt-3">
          World, African, Pizzeria, Coffee
        </Text>
        <View className="flex-row mt-3 items-center">
          <AntDesign name="star" size={15} color="#3EB075" />
          <Text className="ml-2 font-bold text-primary">4.8</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TopFood;
