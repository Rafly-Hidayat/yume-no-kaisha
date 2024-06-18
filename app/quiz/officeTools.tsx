import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import { Audio } from "expo-av";
import ModalAnswer from "@/components/ModalAnswer";

export default function officeTools() {
  const pen = require("@/assets/images/pen.png");
  const notebook = require("@/assets/images/notebook.png");
  const clip = require("@/assets/images/clip.png");
  const books = require("@/assets/images/books.png");
  const pencil = require("@/assets/images/pencil.png");
  const cabinet = require("@/assets/images/cabinet.png");
  const computer = require("@/assets/images/computer.png");
  const folder = require("@/assets/images/folder.png");
  const highlither = require("@/assets/images/highlither.png");
  const idcard = require("@/assets/images/idcard.png");
  const perforator = require("@/assets/images/perforator.png");
  const photocopiers = require("@/assets/images/photocopiers.png");
  const projector = require("@/assets/images/projector.png");
  const stepler = require("@/assets/images/stepler.png");
  const stickynotes = require("@/assets/images/stickynotes.png");

  const listQuiz = [
    {
      question: " ボールペン ",
      answers: [pen, notebook, clip, books],
      correctAnswer: 0,
    },
    {
      question: " けいこぺン ",
      answers: [pencil, notebook, clip, highlither],
      correctAnswer: 3,
    },
    {
      question: " しりょう ",
      answers: [cabinet, perforator, clip, folder],
      correctAnswer: 3,
    },
    {
      question: " ふせん ",
      answers: [folder, stickynotes, computer, stepler],
      correctAnswer: 2,
    },
    {
      question: " コンピューター ",
      answers: [computer, photocopiers, idcard, projector],
      correctAnswer: 0,
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
      source={require("@/assets/images/quizKotoba.jpg")}
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
              }}
            >
              <Text
                style={{
                  fontFamily: "LeagueSpartanBold",
                  textAlign: "center",
                  fontSize: 40,
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
                    paddingVertical: 20,
                    width: 140,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => HandleAnswer(index)}
                >
                  <Image source={item} style={{ width: 65, height: 65 }} />
                </TouchableOpacity>
              )}
              numColumns={2}
              keyExtractor={(item) => item}
              contentContainerStyle={{
                gap: 20,
                alignItems: "center",
              }}
              columnWrapperStyle={{ gap: 20 }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
