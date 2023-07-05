import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Diario({ navigation, exibir }) {
  const [answers, setAnswers] = useState({
    pergunta1: '',
    pergunta2: '',
    pergunta3: '',
    pergunta4: '',
  });

  const handleAnswerChange = (question, text) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: text,
    }));
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: "#FDF8F5",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ marginBottom: 10 }}>Como você se sente?</Text>
        <TextInput
          placeholder="Enter your text"
          value={answers.pergunta1}
          onChangeText={(text) => handleAnswerChange("pergunta1", text)}
        />

        <Text style={{ marginBottom: 20 }}>Você se sente feliz?</Text>
        <TextInput
          placeholder="Enter your text"
          value={answers.pergunta2}
          onChangeText={(text) => handleAnswerChange("pergunta2", text)}
        />

        <Text style={{ marginBottom: 20 }}>Você tomou os remédios?</Text>
        <TextInput
          placeholder="Enter your text"
          value={answers.pergunta3}
          onChangeText={(text) => handleAnswerChange("pergunta3", text)}
        />

        <Text style={{ marginBottom: 20 }}>4 pergunta</Text>
        <TextInput
          placeholder="Enter your text"
          value={answers.pergunta4}
          onChangeText={(text) => handleAnswerChange("pergunta4", text)}
        />
      </View>
    </View>
  );
}
