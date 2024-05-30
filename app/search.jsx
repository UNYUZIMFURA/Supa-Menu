import {
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
 TouchableWithoutFeedback
} from "react-native";
import { router } from "expo-router";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "../components/CustomButton";

const search = () => {
  return (
    <SafeAreaView className="bg-[#1010470e] h-full pt-24 px-5">
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
            onFocus={() => router.push("/menu")}
          />
        </View>
        <View className="bg-white rounded-md mt-6 w-full h-[370px] flex-col items-center py-20">
          <TouchableWithoutFeedback onPress={() => router.push("/menu")}>
            <View className="flex-col items-center justify-center">
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={200}
                color="black"
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View className="mt-6 w-full">
          <CustomButton
            content={"Go Back"}
            onPress={() => router.back()}
          ></CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default search