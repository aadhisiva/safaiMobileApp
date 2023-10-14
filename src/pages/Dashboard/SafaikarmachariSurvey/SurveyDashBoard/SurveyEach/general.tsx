//import liraries
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {
  DROPDOWN,
  INPUT,
  MULTIPLE_QUESTION,
  SINGLE_QUESTION,
  SUB_QUESTION,
  arrayData,
} from '../../../../../utils/constants';
import {SKTextInputWithQuestion} from '../../../../../common/SKInputWithQuestion';
import {SKTextDropdownWithQuestion} from '../../../../../common/SKDropDownWithQuestion';
import { SKTextSingleSelectionWithQuestion } from '../../../../../common/SKSignleSelectionWithQuestion';

// create a component
export const GeneralSurvey = ({route}: any) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {arrayData.map(obj => {
          return obj.Q_type == INPUT ? (
            <SKTextInputWithQuestion
              label={''}
              placeholder={''}
              question={obj.Q_question}
              questionNo={obj.Q_no}
            />
          ) : obj.Q_type == DROPDOWN ? (
            <SKTextDropdownWithQuestion
              label={''}
              placeholder={''}
              question={obj.Q_question}
              questionNo={obj.Q_no}
              Dropdownkeys={obj.Dropdownkeys}
            />
          ) : obj.Q_type == SINGLE_QUESTION ? (
            <SKTextSingleSelectionWithQuestion
              label={''}
              placeholder={''}
              question={obj.Q_question}
              questionNo={obj.Q_no}
              radioButtons={obj.RadioButtons}
            />
          ) : obj.Q_type == MULTIPLE_QUESTION ? (
            <SKTextInputWithQuestion
              label={''}
              placeholder={''}
              question={obj.Q_question}
              questionNo={obj.Q_no}
            />
          ) : obj.Q_type == SUB_QUESTION ? (
            <SKTextInputWithQuestion
              label={''}
              placeholder={''}
              question={obj.Q_question}
              questionNo={obj.Q_no}
            />
          ) : (
            ''
          );
        })}
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
