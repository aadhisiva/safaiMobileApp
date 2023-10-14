//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {SKButtonI} from '../utils/typesOrInterFace';

// create a component
export const SKButton = ({name, onPress}): SKButtonI => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonInline}
          mode="contained"
          onPress={onPress}
        >
          {name}
        </Button>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 10,
     width: 150
    },
});
