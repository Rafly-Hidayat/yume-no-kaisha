import { sentencesAndConversations } from "@/constants/Images";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, TouchableOpacity, View } from "react-native";
import Format from "./format";
import Formal from "./formal";
import Informal from "./informal";
import { AntDesign } from "@expo/vector-icons";

const listPage = [<Format />, <Formal />, <Informal />];

export default function index() {
  const router = useRouter();
  const [idxPage, setIdxPage] = useState(0);

  const PrevBtn = () => {
    if (idxPage > 0) {
      setIdxPage(idxPage - 1);
    } else {
      router.push("activity");
    }
  };

  const NextBtn = () => {
    if (listPage.length > idxPage + 1) {
      setIdxPage(idxPage + 1);
    } else {
      router.push("activity");
    }
  };
  return (
    <ImageBackground source={sentencesAndConversations} style={{ flex: 1 }}>
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
