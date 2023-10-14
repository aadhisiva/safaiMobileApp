//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import { SKTextInputI } from '../utils/typesOrInterFace';

// create a component
export const SKTextInput = ({
    label,
    placeholder
}): SKTextInputI => {
  return (
    <View style={styles.container}>
      <View style={styles.textBox}>
        <TextInput
          mode="outlined"
          label={label}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
  },
  textBox: {
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
});
