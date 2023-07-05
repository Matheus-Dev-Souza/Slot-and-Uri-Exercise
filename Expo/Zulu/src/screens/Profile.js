import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function MyComponent({ navigation }) {
  return (
    <View>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
