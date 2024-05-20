import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import Restaurant from "../../components/Restaurant";

const restaurants = () => {
  const restaurantInfo = [
    {
      id: 1,
      image: require("../../assets/images/juice.jpg"),
    },
    {
      id: 2,
      image: require("../../assets/images/beer.jpg"),
    },
    {
      id: 3,
      image: require("../../assets/images/coca.jpg"),
    },
    {
      id: 4,
      image: require("../../assets/images/food.jpg"),
    },
    {
      id: 5,
      image: require("../../assets/images/juice.jpg"),
    },
    {
      id: 6,
      image: require("../../assets/images/beer.jpg"),
    },
  ];
  return (
    <SafeAreaView className="h-full pt-12">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex-row border-b border-[#10104721] pl-4 pb-2 items-center">
          <TouchableOpacity
            className="p-2 bg-[#1010470e] rounded-sm"
            onPress={() => router.push("/search")}
          >
            <Entypo name="chevron-small-left" size={28} color="#f7941d" />
          </TouchableOpacity>
          <TextInput placeholder="Search..." className="flex-1 ml-5 p-2" />
        </View>
        <View className="px-5 py-3">
          <Text className="text-primary font-bold">Nearby Restaurants</Text>
          <ScrollView className="py-3">
            {restaurantInfo.map((item, index) => (
              <Restaurant key={index} image={item.image} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default restaurants;
