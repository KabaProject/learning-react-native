/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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
  return (
    <ScrollView>
      <Text>Some Text</Text>
      <View>
        <Text>
          Some more text
        </Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue='you can type in me'
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});

export default App;
