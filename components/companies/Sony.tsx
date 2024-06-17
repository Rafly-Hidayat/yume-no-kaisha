import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Sony() {
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
          Sony{"\n"}Corporation
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/sony.jpg")}
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
          Fakta Menarik: Sony pertama kali didirikan di Tokyo oleh Masaru Ibuka
          dan Akio Morita pada tahun 1946. Nama "Sony" berasal dari kata Latin
          "sonus", yang berarti suara, dan juga singkatan dari "sonny boy",
          sebuah slang Amerika untuk remaja yang cerdas dan aktif.
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
          Penjelasan Singkat: Sony Corporation adalah perusahaan teknologi
          multinasional Jepang yang terkenal dengan televisi, kamera, perangkat
          audio, dan konsol permainan PlayStation. Selain itu, mereka membuat
          film, musik, dan video game melalui divisi hiburan mereka. {"\n"}
          Sumber :{" "}
          <Link href="https://www.sony.com/en/SonyInfo/CorporateInfo">
            https://www.sony.com/en/SonyInfo/CorporateInfo
          </Link>
        </Text>
      </View>
    </View>
  );
}
