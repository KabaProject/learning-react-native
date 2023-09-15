/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';


function App(): JSX.Element {

  const [text, setText] = useState('')
  
  const format = (value: String): String => {
    return value.split(' ').map(w => w && '🤣').join('')
  }

  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder='Type here dude'
        onChangeText={value => setText(value)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {
          format(text)
        }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
