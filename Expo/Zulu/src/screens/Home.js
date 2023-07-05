import React from "react";
import { View, Linking } from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { Button, Text } from "react-native-elements";

export default function ({ navigation }) {
  const auth = getAuth();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 20,
      }}
    >
      <Text h4 style={{ marginBottom: 20 }}>
        Bem Vindo! A Zulu seu Assistente.
      </Text>

      <Button
        title="Diario"
        onPress={() => {
          navigation.navigate("Diario");
        }}
        containerStyle={{ marginBottom: 10 }}
      />
      <Button
        title="Consulta"
        onPress={() => {
          navigation.navigate("Consulta");
        }}
        containerStyle={{ marginBottom: 10 }}
      />
      <Button
        title="Terapia"
        onPress={() => {
          navigation.navigate("Terapia");
        }}
        containerStyle={{ marginBottom: 10 }}
      />
      <Button
        title="Chat"
        onPress={() => {
          navigation.navigate("Chat");
        }}
        containerStyle={{ marginBottom: 10 }}
      />
      <Button
        title="Logout"
        onPress={() => {
          signOut(auth);
        }}
        type="outline"
      />
    </View>
  );
}
