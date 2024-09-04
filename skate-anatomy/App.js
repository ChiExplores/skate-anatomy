import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import SkateboardSVG from './assets/skate.svg';
import Svg, { Circle } from 'react-native-svg';


export default function App() {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  return (
    <View style={styles.container}>
      <Text>Open up HELLO </Text>
      <StatusBar style="auto" />
      {/* <Circle cx="50" cy="50" r="50" stroke="purple" strokeWidth=".5" fill="violet" /> */}
      {/* <Circle cx="200" cy="500" r="50" stroke="red" strokeWidth=".5" fill="yellow" /> */}
      <Image source={require('./assets/skateboard.jpg')} />
      <Pressable
        onPress={() => {
          setTimesPressed(current => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
          styles.wrapperCustom,
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
        )}
      </Pressable>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
    height: "100%",
  },
});
