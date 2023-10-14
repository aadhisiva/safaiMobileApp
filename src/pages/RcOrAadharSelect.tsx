/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SKDashboardHeader from '../common/SKDashboardHeader'
import SKTitleBar from '../common/SKTitleBar'
import SKRcOraadharSelection from '../common/SKRcOraadharSelection'

export default function RcOrAadharSelect() {
  return (
    <View>
      <SKDashboardHeader />
      <SKTitleBar isHomeButton={true} />
      <SKRcOraadharSelection />
    </View>
  )
}

const styles = StyleSheet.create({})