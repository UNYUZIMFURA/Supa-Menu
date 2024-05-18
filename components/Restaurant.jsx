import { AntDesign } from "@expo/vector-icons";
import { View, Text, Image } from "react-native"

const Restaurant = ({image}) => {
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
      <View className="ml-5">
        <Text className="text-third font-bold">Choose Kigali</Text>
        <Text className="text-third text-xs mt-3">
          World, African, Pizzeria, Coffee
        </Text>
        <View className="flex-row mt-3 items-center">
          <AntDesign name="star" size={15} color="#f7941d" />
          <Text className="ml-2 font-bold text-primary">4.8</Text>
        </View>
      </View>
    </View>
  );
};

export default Restaurant;
