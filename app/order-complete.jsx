import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const orderComplete = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="h-full flex-col items-center pt-24 bg-white">
          <Text className="font-bold text-primary text-2xl">
            Payment Successful!
          </Text>
          <View className="flex-col items-center gap-y-4 mt-12">
            <Ionicons name="checkmark-circle" size={150} color="#3EB075" />
            <Text className="text-third px-10 text-center leading-5">
              You have successfully paid{" "}
              <Text className="text-secondary font-bold leading-6">RWF 45,000</Text> Thank
              you for your Order!{" "}
            </Text>
            <View className="flex-row gap-x-4 py-4">
              <AntDesign name="star" size={30} color="#3EB075" />
              <AntDesign name="star" size={30} color="#3EB075" />
              <AntDesign name="star" size={30} color="#3EB075" />
              <AntDesign name="star" size={30} color="#3EB075" />
              <AntDesign name="staro" size={30} color="#3EB075" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default orderComplete;
