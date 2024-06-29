import Description from "@/components/sonkeigo/Description";
import Main from "@/components/sonkeigo/Main";
import { horensoAndSonkeigoBackground } from "@/constants/Images";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";

const listPage = [<Main />, <Description />];

export default function Sonkeigo() {
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
          gap: 24,
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
    </ImageBackground>
  );
}
