import { router, Link } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import facebookImg from "../../assets/images/facebook.png";
import googleImg from "../../assets/images/google.png";

const Login = () => {
  return (
    <SafeAreaView className="bg-primary h-full pt-24">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="h-full bg-white w-full rounded-t-[25px] flex items-center px-5 py-6">
          <TouchableOpacity
            onPress={() => {
              router.push("/");
            }}
          >
            <Text className="text-4xl font-bold">
              Supa
              <Text className="text-primary">Menu</Text>
            </Text>
          </TouchableOpacity>
          <View className="flex flex-col items-center gap-2 py-5">
            <Text className="font-bold text-secondary text-lg">
              Welcome ...
            </Text>
            <Text className="text-third">Sign In to continue</Text>
          </View>
          <View className="flex flex-col w-full">
            <View className="flex flex-row items-center justify-between border w-full h-[50px] rounded-md border-third p-4">
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
            <View className="flex flex-row items-center mt-2 justify-between border w-full h-[50px] rounded-md border-third overflow-hidden py-4 pl-4">
              <MaterialIcons name="lock-outline" size={17} color="#b1b6c8" />
              <TextInput
                placeholder="Password"
                className="flex-1 px-3 items-center h-[50px]"
              />
            </View>
          </View>
          <View className="flex w-full items-center py-4">
            <CustomButton
              handlePress={() => router.push("/search")}
              content="Sign In"
            />
          </View>
          <View className="w-full flex-row justify-center items-center pb-4">
            <View className="h-[1px] mr-4 w-[40%] bg-third"></View>
            <Text className="text-third font-bold">OR</Text>
            <View className="h-[1px] ml-4 w-[40%] bg-third"></View>
          </View>
          <View className="flex flex-col w-full">
            <TouchableOpacity className="relative h-[50px] flex-row items-center justify-center border border-third w-full rounded-md">
              <Image
                source={googleImg}
                className="w-[28px] h-[28px] absolute left-6"
                alt=""
              />
              <Text className="text-third">Login with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity className="relative h-[50px] mt-2 flex-row items-center justify-center border border-third w-full rounded-md">
              <Image
                source={facebookImg}
                className="w-[19px] h-[19px] absolute left-7"
                alt=""
              />
              <Text className="text-third">Login with Facebook</Text>
            </TouchableOpacity>
          </View>
          <View className="flex flex-col items-center pt-5">
            <Text className="text-primary font-bold">Forgot Password? </Text>
            <Text className="text-third mt-2">
              Don't have an account?{" "}
              <Link href="/signup" className="text-primary font-bold">
                Register
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
