import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Mitsubishi() {
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
          Mitsubishi Motor{"\n"}Corporation
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("@/assets/images/mitsubishi.jpeg")}
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
          Fakta Menarik: Salah satu perusahaan Mitsubishi Group adalah
          Mitsubishi Corporation. "Mitsubishi" berasal dari kata Jepang "mitsu",
          yang berarti "tiga", dan "hishi", yang berarti "dia." Tiga berlian
          membentuk gambar ketika mereka digabungkan.
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
          Penjelasan Singkat: Mitsubishi Corporation adalah perusahaan
          multinasional Jepang yang memiliki investasi global yang luas dan
          berkontribusi pada berbagai bidang ekonomi, seperti energi,
          perdagangan, keuangan, dan manufaktur. {"\n"}
          Sumber :{" "}
          <Link href="https://www.mitsubishicorp.com/jp/en/index.html">
            https://www.mitsubishicorp.com/jp/en/index.html
          </Link>
        </Text>
      </View>
    </View>
  );
}
