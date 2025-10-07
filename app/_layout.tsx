import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function layout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        title: "Adota Paraná",
        headerStyle: { backgroundColor: "orange" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 15 }}
            onPress={() => {
              if(router.canDismiss()){
                router.dismissAll()
              }
              router.replace("/")}} // Vai para a rota principal
          >
            <Ionicons name="home-outline" size={24} color="#fff" />
          </TouchableOpacity>
        ),
      }}
    />
  );
}
