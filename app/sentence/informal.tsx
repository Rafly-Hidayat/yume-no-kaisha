import React from "react";
import { Text, View } from "react-native";

export default function Informal() {
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
        CONTOH{"\n"}KALIMAT
      </Text>

      <View
        style={{
          backgroundColor: "rgba(14, 37, 64, 0.8)",
          padding: 10,
          borderRadius: 20,
          width: "90%",
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "OpenSansBold",
            fontSize: 26,
            color: "white",
          }}
        >
          Informal
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "rgba(14, 37, 64, 0.8)",
          padding: 10,
          borderRadius: 20,
          width: 350,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "OpenSansBold",
            fontSize: 20,
            color: "white",
          }}
        >
          さちょうがレポートを{"\n"}チェックしましたよ。{"\n"}Direktur sudah
          melihat laporan itu.
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "rgba(14, 37, 64, 0.8)",
          padding: 10,
          borderRadius: 20,
          width: 350,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "OpenSansBold",
            fontSize: 20,
            color: "white",
          }}
        >
          すみません、あしたのかいぎに{"\n"}さんかできないんです。{"\n"}Maaf,
          saya tidak bisa hadir rapat besok.
        </Text>
      </View>
    </View>
  );
}
