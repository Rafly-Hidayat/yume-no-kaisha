import {
  breakRoom,
  companyIcon,
  meetingRoom,
  officeRoom,
  receptionist,
  smokingRoom,
  waitingRoom,
} from "@/constants/Images";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const listRoom = [
  { image: receptionist, japanese: "うけつけ", indonesian: "Resepsionis" },
  { image: companyIcon, japanese: "かいしゃ", indonesian: "Perusahaan" },
  { image: officeRoom, japanese: "じむしつ", indonesian: "Ruang Kantor" },
  { image: meetingRoom, japanese: "かいぎしつ", indonesian: "Ruang Rapat" },
  {
    image: breakRoom,
    japanese: "きゅうけいしつ",
    indonesian: "Ruang Istirahat",
  },
  { image: waitingRoom, japanese: "おうせつしつ", indonesian: "Ruang Tunggu" },
  { image: smokingRoom, japanese: "きつえんじょ", indonesian: "Area Merokok" },
];

export default function room() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 9;

  const paginatedList = listRoom.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handleNextPage = () => {
    if ((currentPage + 1) * pageSize < listRoom.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View
      style={{
        padding: 20,
        height: "90%",
        width: "100%",
        gap: 20,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          textTransform: "uppercase",
          fontFamily: "DmSerifDisplay",
          fontSize: 20,
        }}
      >
        kosakata ruangan di kantor
      </Text>
      <FlatList
        data={paginatedList}
        renderItem={({ item }) => (
          <View
            style={{
              borderRadius: 10,
              width: 100,
              backgroundColor: "rgba(146, 146, 146, 0.6)",
              justifyContent: "center",
              alignItems: "center",
              margin: 4,
              paddingVertical: 10,
              gap: 2,
            }}
          >
            <Image source={item.image} style={{ width: 50, height: 50 }} />
            <Text
              style={{
                fontFamily: "LeagueSpartanBold",
                fontSize: 12,
                textAlign: "center",
              }}
            >
              {item.japanese}
            </Text>
            <Text
              style={{
                fontFamily: "LeagueSpartanBold",
                fontSize: 12,
                textAlign: "center",
              }}
            >
              {item.indonesian}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.image}
        numColumns={3}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      />
      <View>
        {currentPage > 0 && (
          <View style={{ alignItems: "flex-start" }}>
            <TouchableOpacity onPress={handlePrevPage}>
              <AntDesign name="leftcircle" size={60} color="#F5C1CC" />
            </TouchableOpacity>
          </View>
        )}
        {(currentPage + 1) * pageSize < listRoom.length && (
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={handleNextPage}>
              <AntDesign name="rightcircle" size={60} color="#F5C1CC" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
