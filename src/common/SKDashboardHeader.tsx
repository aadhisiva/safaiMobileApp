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
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const SKDashboardHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.headerImage} source={require("../../assests/Dashboard/logo.png")} />
                <View style={styles.headerTitle}>
                    <Text style={styles.title}>{"GOVERNMENT OF KARNAKA"}</Text>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    headerImage: {
        width: 70,
        height: 70
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 8,
        borderBottomWidth: 2,
    },
    headerTitle: {
        marginLeft: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: "#000000"
    }
});

//make this component available to the app
export default SKDashboardHeader;
