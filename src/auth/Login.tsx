/* eslint-disable prettier/prettier */

/**
 * Author ::: aadhisivapanjagala@gmail.com
 * App ::: Safai
 * File ::: App.tsx
 * Created ::: 2023-08-03/9:40pm
 * Modified :::
 */

import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from '@react-navigation/native';
import SKLoginFooterWithBack from '../common/SKLoginFooterWithBack';


const Login = () => {

    // naivigation between pages
    const navigation = useNavigation();

    return (
        <View style={styles.loginConatiner}>
            <View style={styles.imageConatiner}>
                <LinearGradient
                    colors={["#D3F1F1", "#fefff8"]}
                    style={styles.linearGradient}
                >
                    <Image
                        style={styles.logoImage}
                        source={require('../../assests/Login/govLogo.png')}
                    />
                </LinearGradient>
            </View>
            <View style={styles.textConatiner}>
                <Text style={styles.title}>{'GOVERNEMENT OF KARNATAKA'}</Text>
                <Text style={styles.subTitle}>{'KARNATAKA STATE COMMISSION FOR SAFAI KARMACHARIES '}</Text>
                <Text style={styles.ProjectTitle}>{'SOCIAL AND WELFARE DEPARTMENT'}</Text>
            </View>
            <View style={styles.userIcon}>
                <Image
                    source={require('../../assests/Login/userIcon.png')}
                    height={60}
                    width={60}
                />
            </View>
            <View style={styles.textBox}>
                <TextInput
                    mode="outlined"
                    label="Mobile Number"
                    placeholder="type number"
                />
            </View>
            <View style={styles.textBox}>
                <TextInput
                    mode="outlined"
                    label="Otp"
                    placeholder="type otp"
                />
                <TouchableOpacity onPress={() => console.log('##pressed')}>
                    <View style={styles.resenOtp}>
                        <Text style={styles.resendOtpTitle}>
                            Resend Otp
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.submitButton}>
                <Button style={styles.buttonInline} mode="contained" onPress={() => navigation.navigate("Dashboard")}>
                    Submit
                </Button>
            </View>
            <View style={styles.workerConatiner}>
                <Image
                    style={styles.workersImage}
                    source={require('../../assests/Login/workers.png')}
                />
            </View>
                <SKLoginFooterWithBack isImage={true} />
        </View>
    );
};

const styles = StyleSheet.create({
    loginConatiner: {
        flex: 1,
    },
    linearGradient: {
        paddingTop: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageConatiner: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    resenOtp: {
        alignItems: 'flex-end',
    },
    resendOtpTitle: {
        color: 'blue',
        fontSize: 18
    },
    logoImage: {
        width: 70,
        height: 70,
    },
    textConatiner: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    userIcon: {
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox: {
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30
    },
    workerConatiner: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        zIndex: -1,
        right: 0,
    },
    submitButton: {
        paddingTop: 10,
        alignItems: 'center',
    },
    buttonInline: {
        backgroundColor: '#1C51D9',
        color: '#ffff',
    },
    workersImage: {
        width: null,
        height: 570,
    },
    title: {
        paddingTop: 10,
        fontSize: 10,
        fontWeight: '800',
        lineHeight: 8,
        color: "#000000"
    },
    subTitle: {
        paddingTop: 10,
        fontSize: 10,
        fontWeight: '800',
        lineHeight: 8,
        color: "#000000"
    },
    ProjectTitle: {
        paddingTop: 20,
        fontSize: 20,
        fontWeight: '800',
        lineHeight: 8,
        color: "#590101"
    }
});

export default Login;
