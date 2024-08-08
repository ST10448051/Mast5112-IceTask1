/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [message, setMessage] = useState('');

  const handleAddUser = () => {
    // Perform any necessary validation here
    if (firstName && surname) {
      setMessage(`Data Entered: ${firstName} ${surname}`);
      Alert.alert('Success', `Data Entered: ${firstName} ${surname}`);
    } else {
      Alert.alert('Error', 'Please enter both first name and surname');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainPicture}>
        <Image style={styles.imageSize} source={require('./img/welcome_to_react.png')} />
      </View>
      <Text style={styles.welcomeText}>Welcome to your React App!</Text>
      <Text style={styles.headingText}>Enter Name:</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <Text style={styles.headingText}>Enter Surname:</Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      <Button title="Add User" onPress={handleAddUser} />
      {message ? <Text style={styles.messageText}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  welcomeText: {
    paddingTop: 40,
    color: '#800080', // Using the RGB value for purple
    fontWeight: 'bold',
    fontSize: 28,
    textAlign: 'center', 
  },
  headingText: {
    marginTop: 20,
    fontSize: 20,
  },
  inputBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  messageText: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});
