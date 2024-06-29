import {
  ceo,
  coworkers,
  director,
  directorManager,
  employee1,
  employee2,
  generalChairman,
  headOfDapartment,
  headOfWitness,
  leader,
  permanentEmployee,
  secretary,
  staff,
  team,
  viceDirector,
} from "@/constants/Images";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const listJob = [
  { image: director, japanese: "とりしまりやく", indonesian: "Direktur" },
  {
    image: viceDirector,
    japanese: "ふくしゃちょう",
    indonesian: "Wakil Presiden Direktur",
  },
  {
    image: directorManager,
    japanese: "じょうむ",
    indonesian: "Direktur Manager",
  },
  { image: leader, japanese: "リーダー", indonesian: "Pemimpin" },
  { image: secretary, japanese: "ひしょ", indonesian: "Sekretaris" },
  { image: headOfWitness, japanese: "かちょう", indonesian: "Kepala Saksi" },
  {
    image: headOfDapartment,
    japanese: "ぶちょう",
    indonesian: "Kepala Bagian",
  },
  { image: generalChairman, japanese: "かいちょう", indonesian: "Ketua Umum" },
  { image: ceo, japanese: "しゃちょう", indonesian: "Kepala Kantor" },
  { image: coworkers, japanese: "どうりょう", indonesian: "Rekan Kerja" },
  { image: employee1, japanese: "かいしゃいん", indonesian: "Karyawan" },
  { image: employee2, japanese: "しょくいん", indonesian: "Pegawai" },
  {
    image: permanentEmployee,
    japanese: "せいしゃいん",
    indonesian: "Karyawan Tetap",
  },
  { image: staff, japanese: "スタッフ", indonesian: "Staff" },
  { image: team, japanese: "チーム", indonesian: "Team" },
];

export default function job() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 9;

  const paginatedList = listJob.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handleNextPage = () => {
    if ((currentPage + 1) * pageSize < listJob.length) {
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
        kosakata jabatan di kantor
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
            }}
          >
            <Image source={item.image} style={{ width: 50, height: 65 }} />
            <Text
              style={{
                fontFamily: "LeagueSpartanBold",
                fontSize: 10,
                textAlign: "center",
              }}
            >
              {item.japanese}
            </Text>
            <Text
              style={{
                fontFamily: "LeagueSpartanBold",
                fontSize: 10,
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
        {(currentPage + 1) * pageSize < listJob.length && (
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
