import Honda from "@/components/companies/Honda";
import Mitsubishi from "@/components/companies/Mitsubishi";
import Nintendo from "@/components/companies/Nintendo";
import Toyota from "@/components/companies/Toyota";
import Sony from "@/components/companies/Sony";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function company() {
  const listCompany = [
    <Sony />,
    <Toyota />,
    <Honda />,
    <Nintendo />,
    <Mitsubishi />,
  ];
  const router = useRouter();

  const [idxCompany, setIdxCompany] = useState(0);

  const PrevCompany = () => {
    if (idxCompany > 0) {
      setIdxCompany(idxCompany - 1);
    } else {
      router.push("home");
    }
  };

  const NextCompany = () => {
    if (listCompany.length > idxCompany + 1) {
      setIdxCompany(idxCompany + 1);
    } else {
      router.push("home");
    }
  };

  return (
    <ImageBackground
      source={require("@/assets/images/company.jpg")}
      style={{ flex: 1 }}
    >
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
          {listCompany[idxCompany]}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              columnGap: 40,
            }}
          >
            <TouchableOpacity onPress={PrevCompany}>
              <AntDesign name="leftcircle" size={50} color="#FFDE59" />
            </TouchableOpacity>

            <TouchableOpacity onPress={NextCompany}>
              <AntDesign name="rightcircle" size={50} color="#FFDE59" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
