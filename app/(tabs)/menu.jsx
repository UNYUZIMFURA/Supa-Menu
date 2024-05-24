import burger from "../../assets/images/burger2.jpg";
import client from "../../assets/images/client.jpg";
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar
} from "react-native";
import { router } from "expo-router";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Notifications = () => {
  const categories = [
    { name: "Bread", image: require("../../assets/images/burger.jpg") },
    { name: "Burger", image: require("../../assets/images/burger2.jpg") },
    { name: "Drinks", image: require("../../assets/images/beer.jpg") },
    { name: "Pizza", image: require("../../assets/images/pizza.jpg") },
    { name: "Juices", image: require("../../assets/images/juice.jpg") },
    { name: "Meat", image: require("../../assets/images/meat.jpg") },
  ];

  const drinks = [
    {
      image: require("../../assets/images/wine.jpg"),
      name: "Wine",
      price: 5000,
    },
    {
      image: require("../../assets/images/juice.jpg"),
      name: "Juice",
      price: 6000,
    },
    {
      image: require("../../assets/images/beer.jpg"),
      name: "Beer",
      price: 10000,
    },
    {
      image: require("../../assets/images/juice.jpg"),
      name: "Juice",
      price: 20000,
    },
  ];

  const food = [
    {
      image: require("../../assets/images/pizza.jpg"),
      name: "Pizza",
      price: 5000,
    },
    {
      image: require("../../assets/images/burger2.jpg"),
      name: "Hamburger",
      price: 6000,
    },
    {
      image: require("../../assets/images/burger.jpg"),
      name: "Burger",
      price: 10000,
    },
    {
      image: require("../../assets/images/meat.jpg"),
      name: "Brochette",
      price: 20000,
    },
  ];
  return (
    <SafeAreaView className="">
      <StatusBar backgroundColor={"white"}/>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 10,
        }}
      >
        <View className="h-[180px] w-full bg-primary pt-10 px-5 rounded-b-2xl flex-col">
          <View className="flex-row justify-between w-full">
            <View className="flex-row gap-x-4 items-center">
              <View className="h-[46px] w-[46px] rounded-full bg-white overflow-hidden">
                <Image source={client} className="h-full w-full" />
              </View>
              <View className="flex-col">
                <Text className="font-bold text-lg text-secondary">
                  Hello Jenny!
                </Text>
                <Text className="text-white text-xs mt-1">
                  Today's recipes are 🔥
                </Text>
              </View>
            </View>
            <View className="h-[44px] w-[44px] justify-center items-center rounded-full bg-white">
              <FontAwesome name="bell-o" size={20} color={"#3EB075"} />
            </View>
          </View>
          <View className="w-full flex-row items-center mt-7 px-5 bg-white rounded-full">
            <Fontisto name="search" size={18} color="#3EB075" />
            <TextInput placeholder="Search" className="ml-3 h-[50px] flex-1" />
          </View>
        </View>
        <View className="px-3">
          <ImageBackground
            source={burger}
            className="relative h-[190px] rounded-md bg-gray-950 mt-4 overflow-hidden"
          >
            <View
              className="h-full w-full"
              style={{
                backgroundColor: "rgba(0,0,0,.4)",
              }}
            ></View>
            <View className="absolute left-5 top-9 flex-col h-full gap-y-3">
              <Text className="text-white font-bold text-lg">
                Special Discount
              </Text>
              <Text className="text-primary font-bold text-lg">
                Up to{" "}
                <Text className="font-bold text-primary">
                  60%*
                </Text>
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/food-details")}
                className="p-3 bg-primary rounded-full flex-row justify-center"
              >
                <Text className="text-white font-bold">Order Now</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View horizontal={true} className="flex-col p-4 w-full">
          <Text className="text-secondary font-bold">Categories</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            className="flex-row mt-5 gap-x-4"
          >
            {categories.map((category, index) => (
              <View key={index} className="flex-col items-center">
                <View className="h-[50px] w-[50px] rounded-full overflow-hidden">
                  <Image source={category.image} className="h-full w-full" />
                </View>
                <Text className="text-xs mt-2 text-secondary font-bold">
                  {category.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="flex-col px-4 py-3">
          <Text className="text-secondary font-bold">Drinks</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 20,
            }}
          >
            {drinks.map((item, index) => (
              <View key={index} className="flex-col">
                <View className="w-[140px] mr-2 h-[125px] rounded-md relative overflow-hidden">
                  <Image source={item.image} className="h-full w-full" />
                </View>
                <Text className="font-bold mt-3 text-secondary">
                  {item.name}
                </Text>
                <Text className="text-primary font-bold text-xs mt-1">
                  RWF {item.price}
                </Text>
                <View className="flex-row absolute h-[20px] px-1 justify-center items-center top-2 right-3 bg-white rounded-md">
                  <AntDesign name="star" size={12} color="#3EB075" />
                  <Text className="text-xs ml-1 text-secondary font-bold">
                    4.8
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="flex-col px-4">
          <Text className="text-secondary font-bold">Food</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingVertical: 20,
            }}
          >
            {food.map((item, index) => (
              <View key={index} className="flex-col">
                <View className="w-[140px] mr-2 h-[125px] rounded-md relative overflow-hidden">
                  <Image source={item.image} className="h-full w-full" />
                </View>
                <Text className="font-bold mt-3 text-secondary">
                  {item.name}
                </Text>
                <Text className="text-primary font-bold text-xs mt-1">
                  RWF {item.price}
                </Text>
                <View className="flex-row absolute h-[20px] px-1 justify-center items-center top-2 right-3 bg-white rounded-md">
                  <AntDesign name="star" size={12} color="#3EB075" />
                  <Text className="text-xs ml-1 text-secondary font-bold">
                    4.8
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
