import { sonkeigo } from "@/constants/Images";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Main() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 24,
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(254, 254, 254, 0.89)",
          padding: 25,
          borderRadius: 20,
          width: "85%",
        }}
      >
        <Text
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            fontFamily: "LeagueSpartanBold",
            fontSize: 60,
            color: "#FFDE59",
            marginTop: -80,
          }}
        >
          sonkeigo
        </Text>
        <Image source={sonkeigo} style={{ width: "100%", height: 250 }} />
      </View>
      <View
        style={{
          backgroundColor: "rgba(254, 254, 254, 0.89)",
          padding: 10,
          borderRadius: 20,
          width: "80%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "BreeSerif",
            fontSize: 16,
          }}
        >
          Sonkeigo secara harfiah terdiri dari dua kata, sonkei (menghormati,
          menghargai) dan go (bahasa, kata, ungkapan).
        </Text>
      </View>
    </View>
  );
}
