import TopFood from "../../components/TopFood";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const food = () => {
  const foodInfo = [
    {
      id: 1,
      name: "Fresh Juice",
      image: require("../../assets/images/juice.jpg"),
    },
    {
      id: 2,
      name: "Warm Beer",
      image: require("../../assets/images/beer.jpg"),
    },
    {
      id: 3,
      name: "Coca Cola",
      image: require("../../assets/images/coca.jpg"),
    },
    {
      id: 4,
      name: "Hamburger",
      image: require("../../assets/images/burger.jpg"),
    },
    {
      id: 5,
      name: "Fresh Juice",
      image: require("../../assets/images/juice.jpg"),
    },
    {
      id: 6,
      name: "Cold Beer",
      image: require("../../assets/images/beer.jpg"),
    },
  ];
  return (
    <SafeAreaView className="h-full pt-12">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          paddingBottom: 50
        }}
      >
        <View className="w-full flex-row border-b border-[#10104721] pl-4 pb-2 items-center">
          <TouchableOpacity
            className="p-2 bg-[#1010470e] rounded-sm"
            onPress={() => router.back()}
          >
            <Entypo name="chevron-small-left" size={28} color="#3EB075" />
          </TouchableOpacity>
          <TextInput placeholder="Search..." className="flex-1 ml-5 p-2" />
        </View>
        <View className="px-5 py-3">
          <Text className="text-primary font-bold">Popular Food 🍕</Text>
          <ScrollView className="py-3" showsVerticalScrollIndicator={false}>
            {foodInfo.map((item, index) => (
              <TopFood key={index} image={item.image} name={item.name} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default food;
