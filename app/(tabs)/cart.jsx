import { SafeAreaView, ScrollView, View, TouchableOpacity, TextInput, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import CartProduct from "../../components/CartProduct";

const Cart = () => {
   const cartProducts = [1,2,3,4]
  return (
    <SafeAreaView>
      <ScrollView className="h-full pt-10 bg-[#f3f4f6]">
        <View className="w-full flex-row border-b border-[#10104721] pl-4 pb-2 items-center">
          <TouchableOpacity
            className="p-2 bg-[#1010470e] rounded-sm"
            onPress={() => router.push("/search")}
          >
            <Entypo name="chevron-small-left" size={28} color="#f7941d" />
          </TouchableOpacity>
          <TextInput placeholder="Search..." className="flex-1 ml-5 p-2" />
        </View>
        <Text className="text-secondary font-bold text-lg text-center py-3">
          Shopping Cart
        </Text>
        <View className="w-full px-5">
          {cartProducts.map((item, index) => (
            <CartProduct key={index} />
          ))}
        </View>
        <ScrollView className="w-full px-5 py-5 pb-10">
          <View className="bg-white p-5 flex-col rounded-md">
            <Text className="text-secondary font-bold">Payment Summary</Text>
            <View className="flex-col gap-y-4 mt-4">
              <View className="w-full flex-row justify-between">
                <Text>Total items</Text>
                <Text>$18</Text>
              </View>
              <View className="w-full flex-row justify-between">
                <Text>Shipping Costs</Text>
                <Text>Free</Text>
              </View>
              <View className="w-full flex-row justify-between">
                <Text>VAT</Text>
                <Text>$18</Text>
              </View>
              <View className="w-full flex-row justify-between">
                <Text>Total</Text>
                <Text>$50</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-primary py-4 mt-8 items-center justify-center rounded-md">
              <Text className="text-white">PROCEED TO CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
