import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
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
          <Fontisto name="search" size={18} color="#f7941d" />
          <TextInput
            placeholder="Search for your preferred restaurant"
            className="text flex-1 ml-4 items-center h-[50px]"
          />
        </View>
        <View className="w-full flex-col items-center py-20">
          <Text className="font-bold text-lg text-[#363636]">OR</Text>
          <View className="flex-row w-full justify-center mt-8">
            <FontAwesome name="qrcode" size={200} color="black" />
          </View>
          <Text className="font-bold text-lg text-[#363636] mt-8">
            Scan, Pay & Enjoy!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
