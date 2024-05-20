import { Text, View, TouchableOpacity, Image } from "react-native";
import {useState} from "react"
import food from "../assets/images/food.jpg"

const CartProduct = () => {
 const [quantity, setQuantity] = useState(1);

  return (
    <View className="h-[93px] flex-row w-full mt-3 rounded-md p-3 bg-white">
      <View className="w-[75px] h-full rounded-md overflow-hidden">
        <Image source={food} className="h-full w-full" />
      </View>
      <View className="ml-6 w-[65%] h-full">
        <View>
          <Text className="text-secondary font-bold">Gin, Citrus</Text>
          <Text className="text-third text-xs mt-2">White Russian - 12.5</Text>
        </View>
        <View className="flex-row justify-between flex-1 mt-2">
          <Text className="text-primary font-bold text-xs">Frw 5,000</Text>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => setQuantity((prevState) => prevState - 1)}
              className="flex items-center justify-center h-[25px] w-[30px] rounded-md bg-[#f3f4f6]"
            >
              <Text className="text-primary font-bold">-</Text>
            </TouchableOpacity>
            <Text className="ml-2 mr-2 text-third text-xs">{quantity}</Text>
            <TouchableOpacity
              onPress={() => setQuantity((prevState) => prevState + 1)}
              className="flex items-center justify-center h-[25px] w-[30px] rounded-md bg-[#f3f4f6]"
            >
              <Text className="text-primary font-bold">+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartProduct;
