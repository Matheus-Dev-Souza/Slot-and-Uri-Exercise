import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Consulta({ navigation }) {
  const isDarkmode = false; // Defina o valor adequado para isDarkmode

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: isDarkmode ? "#000000" : "#FFFFFF",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
          paddingHorizontal: 16,
        }}
      >
        <Ionicons
          name="chevron-back"
          size={20}
          color={isDarkmode ? "#FFFFFF" : "#000000"}
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontWeight: "bold",
            color: isDarkmode ? "#FFFFFF" : "#000000",
          }}
        >
          Consulta
        </Text>
        <View style={{ width: 20 }} />
      </View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontWeight: "bold" }}>Consulta</Text>
      </View>
    </View>
  );
}
