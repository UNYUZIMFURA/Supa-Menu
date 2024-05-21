import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import PaymentMethod from "../../components/PaymentMethod";
import clientImg from "../../assets/images/client.jpg";
import airtelImg from "../../assets/images/airtel.jpeg";
import masterCardImg from "../../assets/images/master-card.jpeg";

const Checkout = () => {
  return (
    <SafeAreaView>
      <ScrollView className="h-full pt-6 px-6 bg-[#f3f4f6]">
        <View className="flex-col w-full items-center">
          <View className="h-[130px] w-[130px] rounded-full overflow-hidden">
            <Image source={clientImg} className="h-full w-full" />
          </View>
          <Text className="text-secondary mt-4 text-lg font-bold">Jane</Text>
          <Text className="text-third text-xs mt-2">Star Customer</Text>
        </View>
        <View className="flex-col w-full py-4">
          <PaymentMethod
            image={masterCardImg}
            accountNo="123 **** **** **** 2341"
            name="Master Card"
          />
          <PaymentMethod
            image={airtelImg}
            accountNo="0738000055"
            name="Airtel Money"
          />
        </View>
        <View className="flex-col items-center py-3 gap-y-1">
          <Text className="text-secondary">Total</Text>
          <Text className="text-xl text-primary font-bold">$ 315.00</Text>
        </View>
        <TouchableOpacity className="p-4 mt-2 bg-[#3EB075] rounded-md items-center justify-center">
          <Text className="text-white">Pay for the Order</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;
