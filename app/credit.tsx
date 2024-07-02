import { creditBg } from "@/constants/Images";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function credit() {
  const router = useRouter();
  return (
    <View
      style={{
        backgroundColor: "#635e5d",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={creditBg}
        style={{ width: "100%", resizeMode: "contain" }}
      />
      <View
        style={{
          position: "absolute",
          left: 30,
          bottom: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="leftcircle" size={50} color="#FFDE59" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
