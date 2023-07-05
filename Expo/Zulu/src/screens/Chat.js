import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';

export default function ChatScreen1({ navigation }) {
  const [state, setState] = useState({
    chatUser: {
      name: 'Robert',
      profile_image: 'https://randomuser.me/api/portraits/men/5.jpg',
      last_seen: 'online',
    },
    currentUser: {
      name: 'John Doe',
    },
    messages: [
      { sender: 'John', message: 'Olá!', time: '6:01 PM' },
      // Rest of the messages
    ],
    inputMessage: '',
  });

  function getTime(date) {
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  }

  function sendMessage() {
    const { inputMessage, currentUser, messages } = state;
    if (!inputMessage) {
      return;
    }
    const t = getTime(new Date());
    const newMessage = {
      sender: currentUser.name,
      message: inputMessage,
      time: t,
    };
    setState((prevState) => ({
      ...prevState,
      messages: [...messages, newMessage],
      inputMessage: '',
    }));
  }

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <View style={styles.headerLeft}>
          <TouchableOpacity
            style={{ paddingRight: 10 }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Icon
              name='angle-left'
              type='font-awesome'
              size={30}
              color='#fff'
            />
          </TouchableOpacity>
          <Image
            style={styles.userProfileImage}
            source={{ uri: state.chatUser.profile_image }}
          />
          <View
            style={{
              paddingLeft: 10,
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#fff', fontWeight: '700', fontSize: 18 }}>
              {state.chatUser.name}
            </Text>
            <Text style={{ color: '#fff', fontWeight: '300' }}>
              {state.chatUser.last_seen}
            </Text>
          </View>
        </View>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{ paddingRight: 10 }}
          onPress={() => {
            Alert.alert('Audio Call', 'Audio Call Button Pressed');
          }}
        >
          <Icon name='call' size={28} color='#fff' />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <FlatList
          style={{ backgroundColor: '#f2f2ff' }}
          inverted
          data={state.messages.slice().reverse()}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback>
              <View style={{ marginTop: 6 }}>
                <View
                  style={{
                    maxWidth: Dimensions.get('screen').width * 0.8,
                    backgroundColor: '#3a6ee8',
                    alignSelf:
                      item.sender === state.currentUser.name
                        ? 'flex-end'
                        : 'flex-start',
                    marginHorizontal: 10,
                    padding: 10,
                    borderRadius: 8,
                    borderBottomLeftRadius:
                      item.sender === state.currentUser.name ? 8 : 0,
                    borderBottomRightRadius:
                      item.sender === state.currentUser.name ? 0 : 8,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                    }}
                  >
                    {item.message}
                  </Text>
                  <Text
                    style={{
                      color: '#dfe4ea',
                      fontSize: 14,
                      alignSelf: 'flex-end',
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />

        <View style={{ paddingVertical: 10 }}>
          <View style={styles.messageInputView}>
            <TextInput
              value={state.inputMessage}
              style={styles.messageInput}
              placeholder='Message'
              onChangeText={(text) =>
                setState((prevState) => ({
                  ...prevState,
                  inputMessage: text,
                }))
              }
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity
              style={styles.messageSendView}
              onPress={sendMessage}
            >
              <Icon name='send' type='material' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: { height: '100%', aspectRatio: 1, borderRadius: 100 },
  container: {
    flex: 1,
    backgroundColor: '#f2f2ff',
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  messageInput: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});
