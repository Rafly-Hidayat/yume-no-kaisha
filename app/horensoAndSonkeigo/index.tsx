import { horensoAndSonkeigoBackground } from "@/constants/Images";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function index() {
  const router = useRouter();
  return (
    <ImageBackground source={horensoAndSonkeigoBackground} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            rowGap: 50,
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 20,
              backgroundColor: "rgba(249, 217, 143, 0.7)",
              paddingHorizontal: 10,
              marginVertical: 10,
              width: 300,
            }}
            onPress={() => router.push("horensoAndSonkeigo/horenso")}
          >
            <Text
              style={{
                fontSize: 50,
                fontFamily: "LeagueSpartanBold",
                textDecorationLine: "underline",
                textAlign: "center",
              }}
            >
              HORENSO
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 20,
              backgroundColor: "rgba(249, 217, 143, 0.7)",
              paddingHorizontal: 10,
              marginVertical: 10,
              width: 300,
            }}
            onPress={() => router.push("horensoAndSonkeigo/sonkeigo")}
          >
            <Text
              style={{
                fontSize: 50,
                fontFamily: "LeagueSpartanBold",
                textDecorationLine: "underline",
                textAlign: "center",
              }}
            >
              SONKEIGO
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: "absolute",
            left: 50,
            bottom: 50,
          }}
        >
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 50 / 2, // This makes the TouchableOpacity elliptical
              backgroundColor: "rgba(249, 217, 143, 1)", // Ensure the background color is opaque enough
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 10,
            }}
            onPress={() => router.push("home")}
          >
            <FontAwesome5 name="home" size={26} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
