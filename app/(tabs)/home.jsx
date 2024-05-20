import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import food from "../../assets/images/food.jpg";
import FeaturedFood from "../../components/FeaturedFood";
import { router } from "expo-router";
import { Entypo } from "@expo/vector-icons";

const Home = () => {
 const [selectedIngredientIndex, setSelectedIngredientIndex] = useState(null);
  const featuredFood = [
    {
      name: "Mexican Cheese",
      image: require("../../assets/images/pizza.jpg"),
    },
    {
      name: "Beef Burger",
      image: require("../../assets/images/burger.jpg"),
    },
    {
      name: "Steak",
      image: require("../../assets/images/steak.jpg"),
    },
    {
      name: "Hot chocolate",
      image: require("../../assets/images/chocolate.jpg"),
    },
  ];
  const ingredients = [
    { name: "Onions" },
    { name: "Tomatoes" },
    { name: "Meat" },
    { name: "Salad" },
    { name: "Meat" },
    { name: "Salad" },
  ];
  return (
    <SafeAreaView className="h-full bg-[#f3f4f6]">
      <ScrollView>
        <View className="relative h-[300px] w-full bg-blue-100 rounded-b-[20px] overflow-hidden">
          <Image source={food} alt="" className="h-full w-full" />
          <View className="absolute flex-row bottom-2 left-[46%]">
            <View className="h-[8px] w-[8px] rounded-full bg-primary"></View>
            <View className="h-[8px] w-[8px] ml-2 rounded-full bg-white"></View>
            <View className="h-[8px] w-[8px] ml-2 rounded-full bg-white"></View>
          </View>
        </View>
        <View className="px-3 py-5 flex-row justify-between items-center w-full">
          <View>
            <Text className="text-secondary font-bold">Melting Cheese</Text>
            <Text className="text-xs mt-1 text-third">Hot Italian Pizza</Text>
          </View>
          <TouchableOpacity className="h-[35px] w-[70px] flex items-center justify-center rounded-full bg-primary">
            <Text className="text-gray-100 font-bold text-xs">$ 200</Text>
          </TouchableOpacity>
        </View>
        <View className="px-3">
          <Text className="text-secondary font-bold">Ingredients</Text>
          <ScrollView
            horizontal={true}
            className="h-[100px] flex-row mt-3 gap-x-2"
          >
            {ingredients.map((item, index) => {
              const isSelected = selectedIngredientIndex === index;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setSelectedIngredientIndex(index)}
                  className={`flex items-center py-2 h-full w-[70px] rounded-full ${
                    isSelected ? "bg-primary" : "bg-white"
                  }`}
                >
                  <View className="h-[53px] w-[53px] bg-white rounded-full overflow-hidden">
                    <Image source={food} alt="" className="h-full w-full" />
                  </View>
                  <Text
                    className={`mt-2 text-xs ${
                      isSelected ? "text-white" : "text-secondary"
                    } font-bold`}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View className="flex-row px-3 py-4 justify-between items-center">
          <View className="h-[50px] w-[120px] flex-row justify-center items-center rounded-full">
            <TouchableOpacity className="flex items-center justify-center py-1 px-4 rounded-full bg-secondary">
              <Text className="text-white font-bold">-</Text>
            </TouchableOpacity>
            <Text className="ml-2 text-third font-bold">04</Text>
            <TouchableOpacity className="flex items-center justify-center py-1 px-4 ml-2 bg-primary rounded-full">
              <Text className="text-white font-bold">+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="bg-secondary rounded-md flex items-center justify-center h-[40px] px-4">
            <Text className="text-white font-bold">Order Now</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-col justify-center w-[93%] mx-auto shadow bg-[#f3f4f6] rounded-md">
          <View className="h-[60px] flex-row items-center justify-between w-full p-4">
            <TouchableOpacity
              className="h-[30px] w-[30px] items-center justify-center bg-primary rounded-sm"
              onPress={() => router.push("/search")}
            >
              <Entypo name="chevron-small-left" size={22} color="white" />
            </TouchableOpacity>
            <Text className="font-bold text-secondary">Featured Food</Text>
            <TouchableOpacity
              className="h-[30px] w-[30px] items-center justify-center p-1 bg-white rounded-sm"
              onPress={() => router.push("/search")}
            >
              <Entypo name="dots-three-vertical" size={14} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView className="w-full px-4">
            {featuredFood.map((item, index) => (
              <FeaturedFood key={index} name={item.name} image={item.image} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
