//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RadioButton, TextInput} from 'react-native-paper';
import {SKTextInputI} from '../utils/typesOrInterFace';

// create a component
export const SKTextSingleSelectionWithQuestion = ({
  label,
  placeholder,
  question,
  questionNo,
  radioButtons,
}): SKTextInputI => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text>
          <Text style={styles.questionNumber}>{questionNo}.</Text>
          <Text style={styles.question}>{question}</Text>
        </Text>
        <View style={styles.textBoxContainer}>
          {(radioButtons || []).map((obj: String, i: String) => (
            <RadioButton
              key={i}
              value={"Sdfdf"}
              status={checked === obj ? 'checked' : 'unchecked'}
              onPress={() => setChecked(obj)}
            />
          ))}
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
    display: 'flex',
    flexDirection: 'row',
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
