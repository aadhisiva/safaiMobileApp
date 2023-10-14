//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SKTextInputI} from '../utils/typesOrInterFace';

// create a component
export const SKTextInputWithQuestion = ({label, placeholder, question, questionNo}): SKTextInputI => {
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text>
          <Text style={styles.questionNumber}>{questionNo}.</Text>
          <Text style={styles.question}>{question}</Text>
        </Text>
        <View style={styles.textBoxContainer}>
          <TextInput
            style={styles.textBox}
            mode="outlined"
            label={label}
            placeholder={placeholder}
          />
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  questionContainer: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textBoxContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  textBox: {
    height: 40,
  },
  questionNumber: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  question: {
    fontSize: 17,
    fontWeight: '400',
  },
});
