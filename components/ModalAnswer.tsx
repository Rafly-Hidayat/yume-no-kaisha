import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { Image, Modal, View } from "react-native";

interface InputProps {
  showModal: boolean;
  isCorrect: boolean;
}

const ModalAnswer: React.FC<InputProps> = ({ showModal, isCorrect }) => {
  const correctAnswer = require("@/assets/images/correct.png");
  const wrongAnswer = require("@/assets/images/wrong.png");

  const [imageAnswer, setImageAnswer] = useState(correctAnswer);

  const playCorrectSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/audio/correct.mp3")
    );
    await sound.playAsync();
  };

  const playWrongSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("@/assets/audio/wrong.mp3")
    );
    await sound.playAsync();
  };

  useEffect(() => {
    if (showModal) {
      if (isCorrect) {
        setImageAnswer(correctAnswer);
        playCorrectSound();
      } else {
        setImageAnswer(wrongAnswer);
        playWrongSound();
      }
    }
  }, [showModal]);

  return (
    <Modal animationType="fade" transparent={true} visible={showModal}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <View
          style={{
            width: "90%",
            padding: 20,
            //   backgroundColor: "#D7F2AF",
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={imageAnswer}
            style={{ width: "100%", height: "80%" }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalAnswer;
