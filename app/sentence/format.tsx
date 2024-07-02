import React from "react";
import { Text, View } from "react-native";

export default function Format() {
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
        POLA{"\n"}KALIMAT
      </Text>

      <View
        style={{
          backgroundColor: "rgba(14, 37, 64, 0.8)",
          padding: 10,
          borderRadius: 20,
          width: "90%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "OpenSansBold",
            fontSize: 40,
            color: "white",
          }}
        >
          Sonkeigo : O/Go + K.Kerja-I + ni narimasu.
        </Text>
      </View>
    </View>
  );
}
