import { toyota } from "@/constants/Images";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Toyota() {
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
          Toyota Motor{"\n"}Corporation
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={toyota}
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
          Fakta Menarik: Anak perusahaan Toyoda Automatic Loom Works, Kiichiro
          Toyoda mendirikan Toyota pada tahun 1937. Namanya diubah dari "Toyoda"
          menjadi "Toyota" karena dianggap membawa keberuntungan dalam budaya
          Jepang.
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
          Penjelasan Singkat: Berdasarkan pendapatan dan produksi tahunan,
          Toyota Motor Corporation adalah produsen mobil terbesar di dunia.
          Toyota Corolla, Camry, dan Prius adalah beberapa kendaraan terkenal
          karena inovasi teknologi, efisiensi bahan bakar, dan kualitas. {"\n"}
          Sumber : <Link href="https://toyota.jp/">https://toyota.jp/</Link>
        </Text>
      </View>
    </View>
  );
}
