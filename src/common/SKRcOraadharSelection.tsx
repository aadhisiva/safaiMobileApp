/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {SKTextInput} from './SKTextInput';
import {SKButton} from './SKButton';
import {useNavigation} from '@react-navigation/native';

export default function SKRcOraadharSelection() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Aadhar Card', value: 'aadhar'},
    {label: 'Ration Card', value: 'rc'},
  ]);

   // naivigation between pages
   const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />
      </View>
      {value ? <SKTextInput value placeholder={`Enter ${value}`} /> : ''}
      {value ? <SKButton name={"Submit"} onPress={() => navigation.navigate('SurveyDashboard')} /> : ("")}
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    display: 'flex',
  },
  title: {
    color: '#000000',
  },
  dropdownContainer: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
});
