import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Nintendo() {
  return (
    <View style={{ rowGap: 10 }}>
      {/* Title */}
      <View
        style={{
          backgroundColor: "rgba(71, 71, 71, 0.75)",

          paddingVertical: 4,
          paddingBottom: 14,
          borderRadius: 20,
          width: 310,
        }}
      >
        <Text
          style={{
            fontSize: 36,
            textAlign: "center",
            color: "#FFDE59",
            fontFamily: "LeagueSpartanBold",
          }}
        >
          Nintendo{"\n"}Corporation
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/nintendo.jpeg")}
            style={{ width: 200, height: 200, borderRadius: 20 }}
          />
        </View>
      </View>

      {/* Desc 1 */}
      <View
        style={{
          backgroundColor: "rgba(71, 71, 71, 0.75)",
          padding: 10,
          borderRadius: 20,
          width: 310,
          rowGap: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "LeagueSpartanBold",
            color: "white",
            textAlign: "auto",
          }}
        >
          Fakta Menarik: Fusajiro Yamauchi mendirikan Nintendo pada tahun 1889
          sebagai produsen kartu permainan tradisional Jepang. Mereka mulai
          membuat permainan video pada tahun 1970-an dengan game arcade seperti
          "Donkey Kong".
        </Text>
      </View>

      {/* Desc 2 */}
      <View
        style={{
          backgroundColor: "rgba(71, 71, 71, 0.75)",
          padding: 10,
          borderRadius: 20,
          width: 310,
          rowGap: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "LeagueSpartanBold",
            color: "white",
            textAlign: "auto",
          }}
        >
          Penjelasan Singkat: Nintendo Co., Ltd. adalah perusahaan permainan
          video Jepang yang terkenal dengan konsol game seperti Nintendo Switch
          dan Nintendo 3DS serta karakter ikonik seperti Mario, Zelda, dan
          Pokémon.{"\n"}
          Sumber : {" "}
          <Link href="https://www.nintendo.co.jp/corporate/en/index.html">
            https://www.nintendo.co.jp/corporate/en/index.html
          </Link>
        </Text>
      </View>
    </View>
  );
}
