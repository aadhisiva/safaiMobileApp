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
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import AntIconButton from 'react-native-vector-icons/AntDesign';
import FontIconButton from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

type TSKTitleBarProps = {
    isHomeButton: boolean
}
// create a component
const SKTitleBar: React.FC<TSKTitleBarProps> = ({ isHomeButton }) => {

    // for naviagtion 
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.homeButton}>
                {isHomeButton ? (
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Dashboard")}>
                        <FontIconButton name='home' size={35} color={"blue"} />
                    </TouchableWithoutFeedback>
                ) : ("")}
            </View>
            <Text style={styles.title}>{"Dashboard"}</Text>
            <View style={styles.logoutContainer}>
                <TouchableWithoutFeedback onPress={() => console.log("pressed")}>
                    <AntIconButton name='logout' size={30} color={"blue"} />
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        height: 50,
        borderBottomWidth: 1,
        backgroundColor: '#E4D86D',
        flexDirection: 'row',
        alignItems: 'center',
    },
    homeButton: {
        paddingLeft: 10,
    },
    logoutContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 10
    },
    title: {
        paddingLeft: 10,
        color: '#000000',
        fontSize: 20
    }
});

//make this component available to the app
export default SKTitleBar;
