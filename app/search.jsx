import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { router } from "expo-router";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const search = () => {
  return (
    <SafeAreaView className="bg-primary h-full pt-24 px-5">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="bg-white flex-row items-center w-full h-[50px] rounded-full border-third pl-6 overflow-hidden">
          <Fontisto name="search" size={18} color="#3EB075" />
          <TextInput
            placeholder="Search for your preferred restaurant"
            className="text flex-1 ml-4 items-center h-[50px]"
            onFocus={() => router.push("/home")}
          />
        </View>
        <View className="w-full h-[450px] justify-between flex-col items-center py-20">
          <Text className="font-bold text-lg text-white">OR</Text>
          <TouchableWithoutFeedback onPress={() => router.push("/food")}>
            <FontAwesome
              name="qrcode"
              size={200}
              color="black"
              style={{
                marginTop: 14,
              }}
            />
          </TouchableWithoutFeedback>
          <Text className="font-bold text-lg text-white">
            Scan, Pay & Enjoy!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
