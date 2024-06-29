import { renraku } from "@/constants/Images";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Description() {
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
        SONKEIGO
      </Text>

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
            fontFamily: "OpenSansBold",
            fontSize: 14,
          }}
        >
          Jadi, sonkeigo adalah bahasa, kata, atau ungkapan yang digunakan untuk
          menghormati atau menghargai lawan bicara. Secara sederhana diartikan
          “bahasa sopan” atau “bahasa hormat”.
        </Text>
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
            fontFamily: "OpenSansBold",
            fontSize: 14,
          }}
        >
          Sonkeigo merupakan salah satu bagian dari keigo, di mana bahasa
          kehormatan ini digunakan untuk memberi penghormatan kepada seseorang
          dengan meningkatkan atau meninggikan tindakan, gerakan, kondisi, dan
          sesuatu yang mereka miliki.
        </Text>
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
            fontFamily: "OpenSansBold",
            fontSize: 14,
          }}
        >
          Misalnya atasan di kantor, guru di sekolah, pelanggan di toko,
          seseorang dengan status sosial yang lebih tinggi, dan sebagainya.
          Sumber : {"\n"}
          <Link href={"https://kepojepang.com/bahasa-jepang/sonkeigo"}>
            https://kepojepang.com/bahasa-jepang/sonkeigo/
          </Link>
        </Text>
      </View>
    </View>
  );
}
