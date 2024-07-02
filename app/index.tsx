import { homeBackground } from "@/constants/Images";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground source={homeBackground} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View style={{ marginBottom: 150, marginTop: 350 }}>
          <View style={{ flexDirection: "row", gap: 10, marginBottom: -50 }}>
            <Text
              style={[
                styles.strokeFont,
                { color: "#F9D6DF", fontFamily: "Modak" },
              ]}
            >
              YUME
            </Text>
            <Text
              style={[
                styles.strokeFont,
                { color: "#EAE8DC", fontFamily: "Modak" },
              ]}
            >
              NO
            </Text>
          </View>
          <Text
            style={[
              styles.strokeFont,
              { color: "#F7ADAF", fontFamily: "KawaiShine" },
            ]}
          >
            KAISHA
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderRadius: 20,
            backgroundColor: "#F7ADAF",
            paddingHorizontal: 10,
          }}
          onPress={() => router.push("home")}
        >
          <Text
            style={{
              fontSize: 50,
              fontFamily: "Modak",
              textDecorationLine: "underline",
            }}
          >
            START
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          left: 30,
          bottom: 20,
        }}
      >
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 50 / 2,
            backgroundColor: "#F7ADAF",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
            borderColor: "black",
            borderWidth: 2,
          }}
          onPress={() => router.push("credit")}
        >
          <Entypo name="info" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  strokeFont: {
    fontSize: 86,
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});
