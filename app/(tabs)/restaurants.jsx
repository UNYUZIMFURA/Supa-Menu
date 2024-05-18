import { Entypo } from "@expo/vector-icons";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import Restaurant from "../../components/Restaurant";
import { router } from "expo-router";

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
        <View className="w-full flex-row border-b border-third pl-4 pb-2 items-center">
          <TouchableOpacity className="p-2 bg-[#d8d8da] rounded-sm" onPress={() => router.push("/search")}>
            <Entypo name="chevron-small-left" size={28} color="#f7941d" />
          </TouchableOpacity>
          <TextInput placeholder="Search..." className="flex-1 ml-5 p-2" />
        </View>
        <View className="p-5">
          <Text className="text-primary font-bold">Nearby Restaurants</Text>
          <View className="py-4">
            <FlatList
              data={restaurantInfo}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Restaurant image={item.image} />}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default restaurants;
