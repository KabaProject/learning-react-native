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
  TextInput,
  FlatList
} from 'react-native';


function App(): JSX.Element {

  return (
    <View style={st.container}>
      <FlatList
        data={[{
          name: 'Name 1'
        },{
          name: 'Name 2'
        },{
          name: 'Name 3'
        },{
          name: 'Name 4'
        },{
          name: 'Name 5'
        },{
          name: 'Name 6'
        },{
          name: 'Name 7'
        },{
          name: 'Name 8'
        },{
          name: 'Name 9'
        },{
          name: 'Name 10'
        },{
          name: 'Name 11'
        }]}
        renderItem={({item}): JSX.Element => <Text style={st.item}>{item.name}</Text>}
      />
    </View>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default App;
