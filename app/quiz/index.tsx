import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function index() {
  const router = useRouter();
  const quizs = [
    { title: "Kotoba", link: "" },
    { title: "Horenso", link: "quiz/horenso" },
    { title: "Sonkeigo", link: "quiz/sonkeigo" },
  ];
  const kotobaQuiz = [
    { title: "Alat Kantor", link: "quiz/officeTools" },
    { title: "Jabatan", link: "quiz/jobTitle" },
    { title: "Ruangan", link: "quiz/workspace" },
  ];

  const [dataQuiz, setDataQuiz] = useState(quizs);
  const [isKotobaQuiz, setIsKotobaQuiz] = useState(false);

  useEffect(() => {
    setDataQuiz(isKotobaQuiz ? kotobaQuiz : quizs);
  }, [isKotobaQuiz]);

  return (
    <ImageBackground
      source={require("@/assets/images/quizcover.jpg")}
      style={{ flex: 1 }}
    >
      <View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      ></View>

      {isKotobaQuiz && (
        <View
          style={{
            position: "absolute",
            left: 50,
            top: 60,
          }}
        >
          <TouchableOpacity onPress={() => setIsKotobaQuiz(false)}>
            <AntDesign name="leftcircle" size={50} color="#0E2540" />
          </TouchableOpacity>
        </View>
      )}
      <View
        style={{
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          rowGap: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "Adigiana",
            fontSize: 46,
            color: "white",
            textShadowColor: "#DD8D48",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 20,
          }}
        >
          QUIZ
        </Text>

        <FlatList
          data={dataQuiz}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderRadius: 20,
                backgroundColor: "rgba(249, 217, 143, 0.7)",
                paddingHorizontal: 10,
                marginVertical: 10,
                width: 300,
              }}
              onPress={() => {
                item.title === "Kotoba"
                  ? setIsKotobaQuiz(true)
                  : router.push(`${item.link}`);
              }}
            >
              <Text
                style={{
                  fontSize: 50,
                  fontFamily: "Adigiana",
                  textDecorationLine: "underline",
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.title}
          contentContainerStyle={{}}
        />
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
    </ImageBackground>
  );
}
