import steak from "../assets/images/steak.jpg";
import { ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View } from "react-native";
import { router } from "expo-router";

const App = () => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        <ImageBackground source={steak}>
          <View
            className="h-full w-full"
            style={{
              backgroundColor: "rgba(0,0,0,.4)",
            }}
          ></View>
          <View className="w-full px-6 items-center justify-center">
            <View className="flex-col items-center justify-around absolute w-full h-[270px] bg-white bottom-8 rounded-md px-6 py-5">
              <Text className="text-secondary text-xl font-bold">
                Satisfy Your Cravings
              </Text>
              <Text className="text-center text-gray-600 leading-5 text-[12px]">
                Feast your eyes on a collection of culinary delights from local
                restaurants prepared by top chefs. Happy eating 😋
              </Text>
              <TouchableOpacity
                onPress={() => router.push("/signup")}
                className="flex-row p-4 w-full justify-center bg-primary rounded-md"
              >
                <Text className="text-white font-bold">Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
