import Job from "@/app/activity/job";
import OfficeTool from "@/app/activity/officeTool";
import Room from "@/app/activity/room";
import {
  conversationIcon,
  horensoAndSonkeigoIcon,
  jobIcon,
  officeToolIcon,
  quizIcon,
  roomIcon,
  sentenceIcon,
  vocabularyBackground,
} from "@/constants/Images";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from "react-native";

type ActivityItem = {
  title: string;
  image: any;
  isSelected: boolean;
  component: React.ComponentType;
};
const listActivity = [
  {
    title: "officeTool",
    image: officeToolIcon,
    isSelected: true,
    component: OfficeTool,
  },
  { title: "job", image: jobIcon, isSelected: false, component: Job },
  { title: "room", image: roomIcon, isSelected: false, component: Room },
];

export default function index() {
  const router = useRouter();
  const [activities, setActivities] = useState<ActivityItem[]>(listActivity);
  const [selectedActivity, setSelectedActivity] = useState<ActivityItem>(
    listActivity[0]
  );
  const SelectedComponent = selectedActivity.component;

  const changeActivity = (title: string) => {
    const updatedActivities = activities.map((activity) =>
      activity.title === title
        ? { ...activity, isSelected: true }
        : { ...activity, isSelected: false }
    );
    setActivities(updatedActivities);
    const selected = updatedActivities.find(
      (activity) => activity.title === title
    );
    if (selected) {
      setSelectedActivity(selected);
    }
  };

  const getImageStyle = (title: string) => {
    switch (title) {
      case "officeTool":
        return { height: 90, width: 40 };
      case "job":
        return { height: 70, width: 55 };
      default:
        return { height: 65, width: 65 };
    }
  };

  return (
    <ImageBackground source={vocabularyBackground} style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            height: "30%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FlatList
            data={activities}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 105,
                  height: 105,
                  borderRadius: 105 / 2,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                  borderColor: item.isSelected ? "black" : "transparent",
                  borderWidth: item.isSelected ? 4 : 0,
                }}
                onPress={() => changeActivity(item.title)}
              >
                <Image source={item.image} style={getImageStyle(item.title)} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.title}
            horizontal={true}
            contentContainerStyle={{ gap: 20, alignItems: "center" }}
          />
        </View>
        <View
          style={{
            height: "70%",
            width: "90%",
            backgroundColor: "white",
            alignItems: "center",
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
        >
          {/* Render the component based on activity selected */}
          <SelectedComponent />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              paddingHorizontal: 14,
              borderTopWidth: 4,
              borderLeftWidth: 4,
              borderRightWidth: 4,
              borderTopColor: "#F5C1CC",
              borderLeftColor: "#F5C1CC",
              borderRightColor: "#F5C1CC",
              borderTopEndRadius: 26,
              borderTopStartRadius: 26,
              width: "104%",
              height: 70,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-around",
                alignItems: "center",
                gap: 10,
                width: "100%",
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  width: 70,
                  height: 50,
                  backgroundColor: "rgba(249, 217, 143, 1)",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                }}
                onPress={() => router.push("home")}
              >
                <FontAwesome5 name="home" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  width: 70,
                  height: 50,
                  backgroundColor: "rgba(249, 217, 143, 1)",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                }}
                onPress={() => router.push("horensoAndSonkeigo/")}
              >
                <Image
                  source={horensoAndSonkeigoIcon}
                  style={{ width: 60, height: 45 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  width: 70,
                  height: 50,
                  backgroundColor: "rgba(249, 217, 143, 1)",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                }}
                onPress={() => router.push("senetence")}
              >
                <Image
                  source={sentenceIcon}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  width: 70,
                  height: 50,
                  backgroundColor: "rgba(249, 217, 143, 1)",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                }}
                onPress={() => router.push("conversation")}
              >
                <Image
                  source={conversationIcon}
                  style={{ width: 55, height: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  width: 70,
                  height: 50,
                  backgroundColor: "rgba(249, 217, 143, 1)",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                }}
                onPress={() => router.push("quiz")}
              >
                <Image source={quizIcon} style={{ width: 50, height: 40 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
