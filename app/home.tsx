import { useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";

export default function Home() {
  const router = useRouter();
  const list = [
    { title: "HOME", link: "company" },
    { title: "ACTIVITY", link: "activity" },
    { title: "QUIZ", link: "quiz" },
  ];

  return (
    <ImageBackground
      source={require("@/assets/images/home.jpg")}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderRadius: 20,
                backgroundColor: "rgba(247, 173, 175, 0.7)",
                paddingHorizontal: 10,
                marginVertical: 10,
                width: 300,
              }}
              onPress={() => router.push(`${item.link}`)}
            >
              <Text
                style={{
                  fontSize: 50,
                  fontFamily: "Adigiana",
                  textDecorationLine: "underline",
                  textAlign: "center"
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', rowGap: 50 }}
        />
      </View>
    </ImageBackground>
  );
}
