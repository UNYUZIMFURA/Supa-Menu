import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Notifications = () => {
  const menuItems = ["Appetizer", "Starter", "Main", "Dessert", "Drink"]
  return (
    <SafeAreaView className="bg-black">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="pt-12 flex-col items-center">
          <Text className="text-primary font-bold text-lg">Choose Kigali</Text>
        </View>
        <View className="flex-row justify-center h-[130px] items-end">
          <View className="flex-col items-center justify-start">
            <MaterialIcons name="table-restaurant" size={76} color="#f7941d" />
            <Text className="text-white font-bold">Ordered - 10+</Text>
          </View>
          <View className="w-[1px] bg-primary h-[90px] ml-16"></View>
          <View className="flex-col items-center justify-start ml-16">
            <FontAwesome6 name="microphone-lines" size={52} color="#f7941d" />
            <Text className="text-white font-bold mt-3">Call Waiter</Text>
          </View>
        </View>
        <View className="w-full flex-col items-center py-10">
          <Text className="text-primary text-xl font-bold">Menu</Text>
          <View className="w-full px-[70px]">
            {menuItems.map((menu, index) => (
              <View key={index} className="w-full mt-8 flex-row items-center justify-between">
                <Text className="text-white text-xl">{menu}</Text>
                <Entypo name="chevron-small-right" size={24} color="white" style={{
                  marginTop: 4
                }} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
