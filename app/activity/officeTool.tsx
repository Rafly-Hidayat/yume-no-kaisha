import {
  books,
  cabinet,
  clip,
  computer,
  folder,
  highlither,
  idcard,
  marker,
  notebook,
  pen,
  pencil,
  perforator,
  phone,
  photocopiers,
  projector,
  stepler,
  stickynotes,
  tape,
} from "@/constants/Images";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const listOfficeTool = [
  { image: idcard, japanese: "めいし", indonesian: "Kartu Nama" },
  { image: photocopiers, japanese: "コピーき", indonesian: "Mesin fotokopi" },
  { image: projector, japanese: "プロジェクター", indonesian: "Proyektor" },
  { image: books, japanese: "バインダー", indonesian: "Binder" },
  { image: phone, japanese: "でんわ", indonesian: "Telepon" },
  { image: tape, japanese: "セロテープ", indonesian: "Selotip/Solasi" },
  { image: pen, japanese: "ボールペン", indonesian: "Pulpen" },
  { image: pencil, japanese: "えんぴつ", indonesian: "Pensil" },
  { image: notebook, japanese: "ノート", indonesian: "Buku Catatan" },
  { image: clip, japanese: "ペーパークリップ", indonesian: "Penjepit Kerjas" },
  { image: marker, japanese: "マーカー", indonesian: "Spidol" },
  { image: perforator, japanese: "パンチ", indonesian: "Pelubang" },
  { image: folder, japanese: "しりょう", indonesian: "Dokumen" },
  { image: computer, japanese: "コンピューター", indonesian: "Komputer" },
  { image: stepler, japanese: "ホッチキス", indonesian: "Stepler" },
  { image: highlither, japanese: "けいこぺン", indonesian: "Stabilo" },
  {
    image: cabinet,
    japanese: "ファイルキャビネット",
    indonesian: "Lemari Arsip",
  },
  { image: stickynotes, japanese: "ふせん", indonesian: "Sticky Notes" },
];

export default function officeTool() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 9;

  const paginatedList = listOfficeTool.slice(
    currentPage * pageSize,
    (currentPage + 1) * pageSize
  );

  const handleNextPage = () => {
    if ((currentPage + 1) * pageSize < listOfficeTool.length) {
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
        kosakata alat kantor
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
        {(currentPage + 1) * pageSize < listOfficeTool.length && (
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
