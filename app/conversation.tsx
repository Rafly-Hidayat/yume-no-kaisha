import {
  conversation1,
  conversation2,
  conversation3,
  sentencesAndConversations,
} from "@/constants/Images";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const listPage = [conversation1, conversation2, conversation3];

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
          <Text
            style={{
              color: "#0E2540",
              fontSize: 52,
              fontFamily: "LeagueSpartanBold",
              textAlign: "center",
            }}
          >
            CONTOH{"\n"}PERCAKAPAN
          </Text>
          <View
            style={{
              backgroundColor: "rgba(14, 37, 64, 0.8)",
              padding: 25,
              borderRadius: 20,
              width: 320,
              alignItems: "center",
            }}
          >
            <Image
              source={listPage[idxPage]}
              style={{ resizeMode: "contain", height: 440 }}
            />
          </View>
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
