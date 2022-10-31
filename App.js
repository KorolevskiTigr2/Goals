import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ 
      padding: 50,
       flexDirection: 'row',
        alignItems: 'center',
         justifyContent: 'center',
          flexWrap: 'wrap' }}>
      <View
        style={{
          backgroundColor: 'red',
          width: '80%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
          ,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          justifyContent: 'center',
          width: '80%',
          height: 100,
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          width: '80%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',       
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}