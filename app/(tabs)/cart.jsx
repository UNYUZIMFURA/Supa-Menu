import CartProduct from "../../components/CartProduct";
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";

const Cart = () => {
  const cartProducts = [
    {
      image: require("../../assets/images/wine.jpg"),
      name: "Wine",
      price: 5000,
    },
    {
      image: require("../../assets/images/burger2.jpg"),
      name: "Hamburger",
      price: 6000,
    },
    {
      image: require("../../assets/images/beer.jpg"),
      name: "Beer",
      price: 10000,
    },
    {
      image: require("../../assets/images/juice.jpg"),
      name: "Juice",
      price: 20000,
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView className="h-full pt-10 bg-[#f3f4f6]">
        <View className="w-full flex-row border-b border-[#10104721] pl-4 pb-2 items-center">
          <TouchableOpacity
            className="p-2 bg-[#1010470e] rounded-sm"
            onPress={() => router.back()}
          >
            <Entypo name="chevron-small-left" size={28} color="#3EB075" />
          </TouchableOpacity>
          <TextInput placeholder="Search..." className="flex-1 ml-5 p-2" />
        </View>
        <Text className="text-secondary font-bold text-lg text-center py-3">
          Shopping Cart
        </Text>
        <View className="w-full px-5">
          {cartProducts.map((item, index) => (
            <CartProduct
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </View>
        <ScrollView className="w-full px-5 py-5 pb-10">
          <View className="bg-white p-5 flex-col rounded-md">
            <Text className="text-secondary font-bold">Payment Summary</Text>
            <View className="flex-col gap-y-4 mt-4">
              <View className="w-full flex-row justify-between">
                <Text className="text-third">Total items</Text>
                <Text className="text-secondary font-bold">FRW 50,000</Text>
              </View>
              <View className="w-full flex-row justify-between">
                <Text className="text-primary font-bold">Shipping Costs</Text>
                <Text className="text-primary font-bold">Free</Text>
              </View>
              <View className="w-full flex-row justify-between">
                <Text className="text-third">VAT</Text>
                <Text className="text-secondary font-bold">-FRW 5,000</Text>
              </View>
              <View className="h-[1px] w-full border border-dashed border-third"></View>
              <View className="w-full flex-row justify-between">
                <Text className="font-bold text-primary">Total</Text>
                <Text className="text-primary font-bold">FRW 45,000</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => router.push("/checkout")}
              className="bg-[#3EB075] py-4 mt-8 items-center justify-center rounded-md"
            >
              <Text className="text-white font-bold">PROCEED TO CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Cart;
