/**
 * Author ::: aadhisivapanjagala@gmail.com
 * App ::: Safai
 * File ::: App.tsx
 * Created ::: 2023-08-03/9:40pm
 * Modified :::
 */

/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/auth/Login';
import Dashboard from './src/pages/Dashboard/DashBoard';
import RcOrAadharSelect from './src/pages/RcOrAadharSelect';
import { SurveyDashboard } from './src/pages/Dashboard/SafaikarmachariSurvey/SurveyDashBoard/SurveyDashBoard';
import { GeneralSurvey } from './src/pages/Dashboard/SafaikarmachariSurvey/SurveyDashBoard/SurveyEach/general';
import { FamilySurvey } from './src/pages/Dashboard/SafaikarmachariSurvey/SurveyDashBoard/SurveyEach/family';
import { JobSurvey } from './src/pages/Dashboard/SafaikarmachariSurvey/SurveyDashBoard/SurveyEach/job';
import { OthersSurvey } from './src/pages/Dashboard/SafaikarmachariSurvey/SurveyDashBoard/SurveyEach/others';
import { CareerSurvey } from './src/pages/Dashboard/SafaikarmachariSurvey/SurveyDashBoard/SurveyEach/career';
import { SurveyLayout } from './src/pages/Dashboard/SafaikarmachariSurvey/child/surveyLayout';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={({ route }) => ({
        header: () => null,
        contentStyle: {backgroundColor: '#FFFFFF'}
      })}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="RcOrAadharSelect" component={RcOrAadharSelect} />
        <Stack.Screen name="SurveyDashboard" component={SurveyDashboard} />
        <Stack.Screen name="SurveyLayout" component={SurveyLayout} />
        {/* sureveyPage */}
        {/* <Stack.Screen name="GeneralSurvey" component={GeneralSurvey} />
        <Stack.Screen name="FamilySurvey" component={FamilySurvey} />
        <Stack.Screen name="JobSurvey" component={JobSurvey} />
        <Stack.Screen name="OthersSurvey" component={OthersSurvey} />
        <Stack.Screen name="CareerSurvey" component={CareerSurvey} /> */}
        {/* sureveyPage ended*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
