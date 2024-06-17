import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Honda() {
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
          Honda Motor{"\n"}Corporation
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/honda.jpg")}
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
          Fakta Menarik: Soichiro Honda dan Takeo Fujisawa mendirikan Honda di
          Hamamatsu, Jepang, pada tahun 1946. Perusahaan ini pertama kali
          membuat mesin piston untuk sepeda sebelum berkembang menjadi pembuat
          mobil dan sepeda motor.
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
          Penjelasan Singkat: Honda Motor Co., Ltd. terkenal dengan inovasi
          teknologi dan keandalan mesinnya. Mereka membuat mobil Honda Civic,
          Accord, dan CR-V, serta sepeda motor Honda Super Cub yang terkenal.
          {"\n"}
          Sumber :{" "}
          <Link href="https://global.honda/en/">https://global.honda/en/</Link>
        </Text>
      </View>
    </View>
  );
}
