import { horenso } from "@/constants/Images";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Title() {
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
          backgroundColor: "rgba(14, 37, 64, 0.89)",
          padding: 25,
          borderRadius: 20,
          width: "80%",
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
          horenso
        </Text>
        <Image source={require("@/assets/images/horenso.jpg")} style={{ width: "100%", height: 250 }} />
      </View>
      <View
        style={{
          backgroundColor: "rgba(14, 37, 64, 0.89)",
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
            color: "white",
          }}
        >
          HORENSO adalah Konsep dasar budaya kerja di jepang, yang merupakan
          singkatan dari{" "}
          <Text style={{ backgroundColor: "#747352" }}>
            HOKOKU (Melaporkan), RENRAKU (Menginformasikan), dan SODAN
            (Konsultasi).
          </Text>
        </Text>
      </View>
    </View>
  );
}
