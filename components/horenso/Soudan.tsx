import { soudan } from "@/constants/Images";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Soudan() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text
        style={{
          color: "#0E2540",
          fontSize: 60,
          fontFamily: "LeagueSpartanBold",
          textAlign: "center",
        }}
      >
        SOUDAN
      </Text>
      <View
        style={{
          backgroundColor: "rgba(255, 222, 89, 0.89)",
          padding: 25,
          borderRadius: 20,
          width: "80%",
        }}
      >
        <Image source={soudan} style={{ width: "100%", height: 250 }} />
      </View>
      <View
        style={{
          backgroundColor: "rgba(255, 222, 89, 0.89)",
          padding: 10,
          borderRadius: 20,
          width: "80%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "OpenSansBold",
            fontSize: 14,
            color: "#0E2540",
          }}
        >
          Terakhir, soudan juga perlu dilakukan untuk meminta nasihat ketika
          sedang terjebak atau ingin meminta pendapat kedua tentang berbagai
          hal. Di Jepang, tindakan ini tidak dilihat sebagai hal yang buruk,
          melainkan sebagai inisiatif untuk meningkatkan diri.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "rgba(255, 222, 89, 0.89)",
          padding: 10,
          borderRadius: 20,
          width: "80%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "OpenSansBold",
            fontSize: 14,
            color: "#0E2540",
          }}
        >
          Tujuan dari budaya ini untuk memastikan bahwa semua orang ada di jalur
          yang sama dan tidak ada yang ditinggalkan atau tertinggal.
        </Text>
      </View>
    </View>
  );
}
