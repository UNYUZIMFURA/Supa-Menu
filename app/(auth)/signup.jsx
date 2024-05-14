import { SafeAreaView, ScrollView, Text, View } from "react-native";

const Signup = () => {
  return (
    <SafeAreaView className="bg-primary h-full pt-32">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="h-full bg-white w-full rounded-t-[25px] flex items-center px-4 py-6">
          <Text className="text-4xl font-bold">
            Supa<Text className="text-primary">Menu</Text>
          </Text>
          <View className="flex flex-col items-center gap-2 py-6">
            <Text className="font-bold text-secondary text-lg">
              Welcome ...
            </Text>
            <Text className="text-third">Please fill in the information</Text>
          </View>
          <View className="flex flex-col gap-2 w-full">
            <View className="border w-full h-[50px] rounded-md border-third"></View>
            <View className="border w-full h-[50px] rounded-md border-third"></View>
            <View className="border w-full h-[50px] rounded-md border-third"></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
