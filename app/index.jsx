import { ScrollView, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import { router, Redirect } from "expo-router";

const App = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.push("/signup");
          }}
        >
          <Text className="text-4xl font-bold">
            Supa
            <Text className="text-white">Menu</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
