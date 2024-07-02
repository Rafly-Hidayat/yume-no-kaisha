import { hokoku } from "@/constants/Images";
import React from "react";
import { Image, Text, View } from "react-native";

export default function Hokoku() {
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
        HOKOKU
      </Text>
      <View
        style={{
          backgroundColor: "rgba(255, 222, 89, 0.89)",
          padding: 25,
          borderRadius: 20,
          width: 320,
          alignItems:  "center",
        }}
      >
        <Image source={hokoku} style={{ resizeMode: "contain", height: 200 }} />
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
          Ketika mulai mengerjakan tugas, penting untuk melaporkan kepada atasan
          secara berkala tentang status pekerjaan kamu. Hal ini tidak hanya
          penting bagi tim untuk dapat mengetahui kemajuan. tetapi juga agar
          dapat mencegah pengelolaan mikro.
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
          Tak hanya melaporkan kemajuan, melainkan juga kesalahan dan kecelakaan
          selama kemajuan. Hokoku mengacu pada cara pelaporan yang lebih formal.
        </Text>
      </View>
    </View>
  );
}
