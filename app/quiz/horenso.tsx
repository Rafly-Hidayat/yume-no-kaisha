import ModalAnswer from "@/components/ModalAnswer";
import { quizBacksound } from "@/constants/Audio";
import { quizHorensoAndSonkaigoBackground } from "@/constants/Images";
import { AntDesign } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function horenso() {
  const listQuiz = [
    {
      question: `Apa itu konsep Horenso?`,
      answers: [
        { key: "A.", value: "Sebuah jenis tarian tradisional Jepang" },
        { key: "B.", value: "Metode untuk mengatur pekerjaan di kantor" },
        {
          key: "C.",
          value:
            "Pendekatan bisnis yang mempromosikan komunikasi, kerjasama, dan pemahaman diantara tim",
        },
        { key: "D.", value: "Alat musik tradisional Jepang" },
      ],
      correctAnswer: 2,
    },
    {
      question: `Apa yang dimaksud dengan "Houkoku" dalam konsep Horenso?`,
      answers: [
        { key: "A.", value: "Melaporkan" },
        { key: "B.", value: "Berhubungan" },
        { key: "C.", value: "Memahami" },
        { key: "D.", value: "Mengatur" },
      ],
      correctAnswer: 0,
    },
    {
      question: `Manakah dari berikut yang bukan bagian dari konsep Horenso?`,
      answers: [
        { key: "A.", value: "Houkoku (Melaporkan)" },
        { key: "B.", value: "Renraku (Berhubungan)" },
        { key: "C.", value: "Sankan (Memahami)" },
        { key: "D.", value: "Gokou (Membatasi)" },
      ],
      correctAnswer: 3,
    },
    {
      question: `Apa yang dimaksud dengan "Renraku" dalam konsep Horenso?`,
      answers: [
        { key: "A.", value: "Melaporkan" },
        { key: "B.", value: "Berhubungan" },
        { key: "C.", value: "Memahami" },
        { key: "D.", value: "Menilai" },
      ],
      correctAnswer: 1,
    },
    {
      question: `Apa yang dimaksud dengan "Soudan" dalam konsep Horenso?`,
      answers: [
        { key: "A.", value: "Melaporkan" },
        { key: "B.", value: "Berhubungan" },
        { key: "C.", value: "Memahami" },
        { key: "D.", value: "Menyelidiki" },
      ],
      correctAnswer: 3,
    },
  ];

  const [idxQuiz, setIdxQuiz] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(true);
  const [backsound, setBacksound] = useState<Audio.Sound | null>(null);

  const router = useRouter();

  const PrevQuiz = () => {
    if (idxQuiz > 0) {
      setIdxQuiz(idxQuiz - 1);
    } else {
      router.back();
    }
  };

  const NextQuiz = () => {
    if (listQuiz.length > idxQuiz + 1) {
      setIdxQuiz(idxQuiz + 1);
    } else {
      router.back();
    }
  };

  const HandleAnswer = (index: number) => {
    if (listQuiz[idxQuiz].correctAnswer === index) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModal(false);
      }, 1100);
    }
  }, [showModal]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(quizBacksound, {
      isLooping: true,
      shouldPlay: true,
    });
    setBacksound(sound);

    await sound.playAsync();
  };

  useEffect(() => {
    playSound();
  }, []);

  const stopSound = async () => {
    await backsound?.stopAsync().then(() => {
      backsound.unloadAsync();
    });
  };

  useEffect(() => {
    return () => {
      if (backsound) {
        stopSound();
      }
    };
  }, [backsound]);

  return (
    <ImageBackground
      source={quizHorensoAndSonkaigoBackground}
      style={{ flex: 1 }}
    >
      <ModalAnswer showModal={showModal} isCorrect={isAnswerCorrect} />
      <View
        style={{
          position: "absolute",
          left: 50,
          top: 60,
        }}
      >
        <TouchableOpacity onPress={PrevQuiz}>
          <AntDesign name="leftcircle" size={50} color="#0E2540" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          right: 50,
          top: 60,
        }}
      >
        <TouchableOpacity onPress={NextQuiz}>
          <AntDesign name="rightcircle" size={50} color="#0E2540" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
              fontFamily: "Adigiana",
              fontSize: 46,
              color: "white",
              textShadowColor: "black",
              textShadowOffset: { width: 1, height: 1 },
              textShadowRadius: 20,
            }}
          >
            QUIZ
          </Text>

          <View
            style={{
              borderRadius: 20,
              paddingVertical: 10,
              width: 300,
              rowGap: 20,
            }}
          >
            <View
              style={{
                borderRadius: 20,
                backgroundColor: "rgba(14, 37, 64, 0.7)",
                paddingVertical: 20,
                width: 300,
                paddingHorizontal: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "LeagueSpartanBold",
                  textAlign: "center",
                  fontSize: 26,
                  color: "white",
                }}
              >
                {listQuiz?.[idxQuiz]?.question || " "}
              </Text>
            </View>

            <FlatList
              data={listQuiz[idxQuiz].answers}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    backgroundColor: "rgba(14, 37, 64, 0.7)",
                    padding: 10,
                    paddingLeft: 20,
                    width: 300,
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                  onPress={() => HandleAnswer(index)}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 24,
                      fontFamily: "LeagueSpartanBold",
                    }}
                  >
                    {item.key}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontSize: 22,
                      fontFamily: "LeagueSpartanBold",
                      flexGrow: 1,
                      flex: 1,
                    }}
                  >
                    {item.value}.
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.key}
              contentContainerStyle={{
                gap: 20,
                alignItems: "center",
              }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
