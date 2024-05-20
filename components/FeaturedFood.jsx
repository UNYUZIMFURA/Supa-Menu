import { View, Text, TouchableOpacity, Image } from "react-native";
import pizza from "../assets/images/pizza.jpg"
import { Foundation } from "@expo/vector-icons";

const FeaturedFood = ({name, image}) => {
    return (
      <View className="h-[100px] py-3 px-2 flex-row items-center justify-between mt-3 w-full rounded-md bg-white">
        <View className="flex-row">
          <View className="h-full w-[75px] rounded-full overflow-hidden">
            <Image source={image} alt="" className="h-full w-full" />
          </View>
          <View className="flex-col h-full justify-center ml-4">
            <Text className="text-secondary font-bold">{name}</Text>
            <Text className="mt-2 text-xs text-third">Fast Food</Text>
            <Text className="mt-2 text-xs text-third">🍕 58 Calories</Text>
          </View>
        </View>
        <View className="flex-col items-end justify-between h-full py-1">
          <TouchableOpacity className="h-[20px] w-[20px] items-center justify-center rounded-full bg-primary">
            <Foundation name="heart" size={14} color="black" />
          </TouchableOpacity>
          <Text className="text-secondary font-bold text-xs">$50.00</Text>
        </View>
      </View>
    );
};

export default FeaturedFood;
