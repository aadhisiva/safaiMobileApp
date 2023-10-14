/* eslint-disable prettier/prettier */

/**
 * Author ::: aadhisivapanjagala@gmail.com
 * App ::: Safai
 * File ::: App.tsx
 * Created ::: 2023-08-03/9:40pm
 * Modified :::
 */

//import liraries
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import SKDashboardHeader from '../../../../common/SKDashboardHeader';
import SKTitleBar from '../../../../common/SKTitleBar';
import SKLoginFooterWithBack from '../../../../common/SKLoginFooterWithBack';

// cards data defined here
const subjects = [
  {
    id: 1,
    name: 'General',
    backGround: '#134E7A',
    path: "GeneralSurvey",
    image: require('../../../../../assests/Dashboard/sweeping_floor.png'),
  },
  {
    id: 2,
    name: 'Family',
    backGround: '#093008',
    path: "FamilySurvey",
    image: require('../../../../../assests/Dashboard/scavenger.png'),
  },
  {
    id: 3,
    name: 'Economic',
    backGround: '#5A6C32',
    image: require('../../../../../assests/Dashboard/family.png'),
  },
  {
    id: 4,
    name: 'Career',
    backGround: '#896D0A',
    image: require('../../../../../assests/Dashboard/clock.png'),
  },
  {
    id: 5,
    name: 'Job',
    backGround: '#896D0A',
    image: require('../../../../../assests/Dashboard/sweeping_floor.png'),
  },
  {
    id: 6,
    name: 'Others',
    backGround: '#896D0A',
    image: require('../../../../../assests/Dashboard/family.png'),
  },
];
const cardGap = 16;

const cardWidth = (Dimensions.get('window').width - cardGap * 7) / 2;

const defaultStyles = {
  marginTop: cardGap,
  width: cardWidth,
  height: 150,
  borderRadius: 16,
  justifyContent: 'flex-start',
  alignItems: 'center',
};

// create a component
export const SurveyDashboard = () => {
  // for naviagtion
  const navigation = useNavigation();

  const handlePressTab = (id: number, path: String) => {
    console.log("path", path)
    navigation.navigate("SurveyLayout");
  };
  return (
    <View style={styles.container}>
      <SKDashboardHeader />
      <SKTitleBar isHomeButton={false} />
      <View style={styles.cardsContainer}>
        <ScrollView>
          <View style={styles.cardsContainer}>
            {subjects.map((subject, i) => {
              return (
                <View
                  key={subject.id}
                  style={{
                    backgroundColor: `${subject.backGround}`,
                    marginLeft: i % 2 !== 0 ? cardGap : 0,
                    ...defaultStyles,
                  }}
                >
                  <TouchableWithoutFeedback
                    onPress={() => handlePressTab(subject.id, subject.path)}
                  >
                    <View style={styles.cardDetails}>
                      <Image style={styles.image} source={subject.image} />
                      <View style={styles.titleContainer}>
                        <Text style={styles.title}>{subject.name}</Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      <SKLoginFooterWithBack isImage={false} />
    </View>
  );
};

// // define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    lineHeight: '25.12px',
  },
  title: {
    textAlign: 'center',
    color: '#ffff',
    fontSize: 18,
    padding: 10,
  },
  cardDetails: {
    paddingTop: 20,
    alignItems: 'center',
  },
  image: {
    objectFit: 'fill',
    width: 60,
    height: 60,
  },
  titleContainer: {},
});
