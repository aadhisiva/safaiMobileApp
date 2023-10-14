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
import { View, StyleSheet, Image, ScrollView, Dimensions, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
// import SKTitleBar from '../../common/SKTitleBar';
import SKDashboardHeader from '../../common/SKDashboardHeader';
import SKTitleBar from '../../common/SKTitleBar';
import { Text } from 'react-native-paper';
import SKLoginFooterWithBack from '../../common/SKLoginFooterWithBack';
import { useNavigation } from "@react-navigation/native";

// cards data defined here
const subjects = [
    {
        id: 1,
        name: 'Safai Karmachari Survey',
        backGround: "#134E7A",
        image: require("../../../assests/Dashboard/sweeping_floor.png")
    },
    {
        id: 2,
        name: 'Identified Manual Scavengers Survey',
        backGround: "#093008",
        image: require("../../../assests/Dashboard/scavenger.png")
    },
    {
        id: 3,
        name: 'MS Death & Dependents of manual scavengers Survey',
        backGround: "#5A6C32",
        image: require("../../../assests/Dashboard/family.png")
    },
    {
        id: 4,
        name: 'Survey History',
        backGround: "#896D0A",
        image: require("../../../assests/Dashboard/clock.png")
    },
];
const cardGap = 16;

const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

const defaultStyles = {
    marginTop: cardGap,
    width: cardWidth,
    height: 220,
    borderRadius: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
}

// create a component
const Dashboard = () => {
    // for naviagtion
    const navigation = useNavigation();

    const handlePressTab = (id: number) => {
        navigation.navigate("RcOrAadharSelect", {id: id})
    }
    return (
        <View style={styles.container}>
            <SKDashboardHeader />
            <SKTitleBar isHomeButton={false} />
            <View style={styles.cardsContainer}>
                <ScrollView>
                    <View
                        style={styles.cardsContainer}
                    >
                        {subjects.map((subject, i) => {
                            return (
                                <View
                                    key={subject.id}
                                    style={{
                                        backgroundColor: `${subject.backGround}`,
                                        marginLeft: i % 2 !== 0 ? cardGap : 0,
                                        ...defaultStyles
                                    }}
                                >
                                    <TouchableWithoutFeedback onPress={() => handlePressTab(subject.id)}>
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
        </View >
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
        color: "#ffff",
        fontSize: 18,
        padding: 10

    },
    cardDetails: {
        paddingTop: 20,
        alignItems: 'center'
    },
    image: {
        objectFit: 'fill',
        width: 90,
        height: 90
    },
    titleContainer: {
    }
});

//make this component available to the app
export default Dashboard;
