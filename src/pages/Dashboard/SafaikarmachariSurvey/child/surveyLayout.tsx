//import liraries
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SKDashboardHeader from '../../../../common/SKDashboardHeader';
import SKTitleBar from '../../../../common/SKTitleBar';
import {GeneralSurvey} from '../SurveyDashBoard/SurveyEach/general';
import MyTabBarCustom from '../../../../common/SKMyTabBarCustom';
import {FamilySurvey} from '../SurveyDashBoard/SurveyEach/family';
import {CareerSurvey} from '../SurveyDashBoard/SurveyEach/career';
import {JobSurvey} from '../SurveyDashBoard/SurveyEach/job';
import {OthersSurvey} from '../SurveyDashBoard/SurveyEach/others';

const Tab = createBottomTabNavigator();

// create a component
export const SurveyLayout = ({children, path}: any) => {
  return (
    <View style={styles.container}>
      <SKDashboardHeader />
      <SKTitleBar isHomeButton={true} />
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBar={props => <MyTabBarCustom {...props} />}
      >
        <Tab.Screen
          options={{title: 'General'}}
          name="GeneralSurvey"
          component={GeneralSurvey}
        />
        <Tab.Screen
          options={{title: 'Family'}}
          name="FamilySurvey"
          component={FamilySurvey}
        />
        <Tab.Screen
          options={{title: 'Career'}}
          name="CareerSurvey"
          component={CareerSurvey}
        />
        <Tab.Screen
          options={{title: 'Job'}}
          name="JobSurvey"
          component={JobSurvey}
        />
        <Tab.Screen
          options={{title: 'Others'}}
          name="OthersSurvey"
          component={OthersSurvey}
        />
      </Tab.Navigator>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
