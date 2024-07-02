import Hokoku from "@/components/horenso/Hokoku";
import Renraku from "@/components/horenso/Renraku";
import Soudan from "@/components/horenso/Soudan";
import Title from "@/components/horenso/Title";
import { horensoAndSonkeigoBackground } from "@/constants/Images";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";

const listPage = [<Title />, <Hokoku />, <Renraku />, <Soudan />];

export default function Horenso() {
  const router = useRouter();
  const [idxPage, setIdxPage] = useState(0);

  const PrevBtn = () => {
    if (idxPage > 0) {
      setIdxPage(idxPage - 1);
    } else {
      router.push("horensoAndSonkeigo");
    }
  };

  const NextBtn = () => {
    if (listPage.length > idxPage + 1) {
      setIdxPage(idxPage + 1);
    } else {
      router.push("horensoAndSonkeigo");
    }
  };
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
            rowGap: 20,
          }}
        >
          {listPage[idxPage]}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              columnGap: 40,
            }}
          >
            <TouchableOpacity onPress={PrevBtn}>
              <AntDesign name="leftcircle" size={50} color="#0E2540" />
            </TouchableOpacity>
            <TouchableOpacity onPress={NextBtn}>
              <AntDesign name="rightcircle" size={50} color="#0E2540" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
