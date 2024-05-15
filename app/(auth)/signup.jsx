import { SafeAreaView, ScrollView, Text, View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";

const Signup = () => {
  return (
    <SafeAreaView className="bg-primary h-full pt-24">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="h-full bg-white w-full rounded-t-[25px] flex items-center px-5 py-6">
          <Text className="text-4xl font-bold">
            Supa<Text className="text-primary">Menu</Text>
          </Text>
          <View className="flex flex-col items-center gap-2 py-5">
            <Text className="font-bold text-secondary text-lg">
              Welcome ...
            </Text>
            <Text className="text-third">Please fill in the information.</Text>
          </View>
          <View className="flex flex-col w-full">
            <View className="flex flex-row items-center justify-between border w-full h-[50px] rounded-md border-third overflow-hidden py-4 pl-4">
              <FontAwesome name="user-o" size={24} color="#b1b6c8" />
              <TextInput
                placeholder="Full Name"
                className="flex-1 px-3 items-center h-[50px]"
              />
            </View>
            <View className="flex flex-row items-center mt-2 justify-between border w-full h-[50px] rounded-md border-third p-4">
              <FontAwesome5 name="phone-alt" size={15} color="#b1b6c8" />
              <TextInput
                placeholder="Phone Number"
                className="flex-1 px-3 items-center h-[50px]"
              />
            </View>
            <View className="flex flex-row items-center mt-2 justify-between border w-full h-[50px] rounded-md border-third p-4">
              <MaterialCommunityIcons
                name="email-outline"
                size={18}
                color="#b1b6c8"
              />
              <TextInput
                placeholder="Your Email"
                className="flex-1 px-3 items-center h-[50px]"
              />
            </View>
          </View>
          <View className="flex w-full items-center py-4">
            <CustomButton content="Proceed"/>
            <Text className="text-third font-bold mt-2">OR</Text>
          </View>
          <Text className="text-third py-1 font-bold">If you have a PMG account,</Text>
          <View className="flex w-full items-center py-4">
            <CustomButton content="Sign In"/>
            <Text className="text-third mt-2">Don't have an account? <Text className="text-primary font-bold">Register</Text></Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
