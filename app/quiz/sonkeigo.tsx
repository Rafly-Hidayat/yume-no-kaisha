import ModalAnswer from "@/components/ModalAnswer";
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

export default function sonkeigo() {
  const listQuiz = [
    {
      question: `Apa itu konsep Sonkeigo?`,
      answers: [
        {
          key: "A.",
          value: "Bahasa sopan yang digunakan untuk merujuk pada diri sendiri",
        },
        {
          key: "B.",
          value:
            "Bahasa sopan yang digunakan untuk merujuk pada orang lain yang lebih tua atau memiliki jabatan lebih tinggi",
        },
        {
          key: "C.",
          value: "Bahasa kasar yang digunakan dalam percakapan sehari-hari",
        },
        {
          key: "D.",
          value: "Bahasa netral yang digunakan dalam komunikasi formal",
        },
      ],
      correctAnswer: 0,
    },
    {
      question: `Bagaimana cara mengucapkan "lama tidak bertemu" dengan menggunakan Sonkeigo?`,
      answers: [
        { key: "A.", value: "おねがいします (onegaishimasu)" },
        { key: "B.", value: "しつれいたします (Shitsureitashimasu)" },
        { key: "C.", value: "ありがとうございます (arigatou gozaimasu)" },
        { key: "D.", value: "ひさしぶりですね (Hisashiburidesune)" },
      ],
      correctAnswer: 3,
    },
    {
      question: `Bagaimana cara mengucapkan "Permisi" dengan menggunakan \n そんけいご?`,
      answers: [
        { key: "A.", value: "しつれいたします (Shitsureitashimasu)" },
        { key: "B.", value: "ありがとうございます (arigatou gozaimasu)" },
        { key: "C.", value: "すみません (sumimasen)" },
        { key: "D.", value: "おねがいします (onegaishimasu)" },
      ],
      correctAnswer: 0,
    },
    {
      question: `Bagaimana cara mengucapkan "terima kasih" dengan menggunakan \n そんけいご?`,
      answers: [
        { key: "A.", value: "ありがとう (arigatou)" },
        { key: "B.", value: "ありがとうございます (arigatou gozaimasu)" },
        { key: "C.", value: "すみません (sumimasen)" },
        { key: "D.", value: "おねがいします (onegaishimasu)" },
      ],
      correctAnswer: 1,
    },
    {
      question: `Ketika berbicara dengan orang yang lebih tua atau memiliki jabatan lebih tinggi, kita menggunakan \n そんけいご untuk menunjukkan...`,
      answers: [
        { key: "A.", value: "Ketidaksopanan" },
        { key: "B.", value: "Kebencian" },
        { key: "C.", value: "Penghargaan dan rasa hormat" },
        { key: "D.", value: "kesombongan" },
      ],
      correctAnswer: 2,
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
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/audio/quizBacksound.mp3"),
      { isLooping: true, shouldPlay: true }
    );
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
      source={require("@/assets/images/quizHorensoAndSonkaigo.jpg")}
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
