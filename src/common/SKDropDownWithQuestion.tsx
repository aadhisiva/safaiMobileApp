//import liraries
import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {SKTextInputI} from '../utils/typesOrInterFace';
import DropDownPicker from 'react-native-dropdown-picker';

// create a component
export const SKTextDropdownWithQuestion = ({
  label,
  placeholder,
  question,
  Dropdownkeys,
  questionNo,
}): SKTextInputI => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState<[]>(Dropdownkeys);

  useEffect(()=> {
    setItems(Dropdownkeys);
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text>
          <Text style={styles.questionNumber}>{questionNo}.</Text>
          <Text style={styles.question}>{question}</Text>
        </Text>
        <View style={styles.textBoxContainer}>
          <DropDownPicker
            open={open}
            value={value}
            items={items || []}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
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
