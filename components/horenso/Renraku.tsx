import { renraku } from "@/constants/Images";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Renraku() {
  return (
    <View style={{ rowGap: 20 }}>
      <Text
        style={{
          color: "#0E2540",
          fontSize: 60,
          fontFamily: "LeagueSpartanBold",
          textAlign: "center",
        }}
      >
        RENRAKU
      </Text>
      <View
        style={{
          backgroundColor: "rgba(255, 222, 89, 0.89)",
          padding: 25,
          borderRadius: 20,
          width: 320,
          alignItems: "center",
        }}
      >
        <Image
          source={renraku}
          style={{ resizeMode: "contain", height: 200 }}
        />
      </View>
      <View
        style={{
          backgroundColor: "rgba(255, 222, 89, 0.89)",
          padding: 10,
          borderRadius: 20,
          width: 320,
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
          Meskipun ini mirip dengan Hokoku, renraku lebih ke arah kolega atau
          sesama tim dalam lingkungan yang kurang formal.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "rgba(255, 222, 89, 0.89)",
          padding: 10,
          borderRadius: 20,
          width: 320,
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
          Untuk memastikan bahwa karyawan yang terkena dampak proyek mengetahui
          informasi terbaru dan terkait, penting bagi kita untuk berkomunikasi
          dengan rekan kerja kita.
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "rgba(255, 222, 89, 0.89)",
          padding: 10,
          borderRadius: 20,
          width: 320,
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
          Bentuk lain dari renraku adalah dengan memberitahu rekan kerja bahwa
          tempat pertemuan telah berubah.
        </Text>
      </View>
    </View>
  );
}
