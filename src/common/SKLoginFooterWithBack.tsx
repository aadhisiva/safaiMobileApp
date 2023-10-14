/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import IconButton from "react-native-vector-icons/MaterialCommunityIcons";

type TSKLoginFooterWithBackProps = {
    isImage: boolean
}

// create a component
const SKLoginFooterWithBack: React.FC<TSKLoginFooterWithBackProps> = ({ isImage }) => {
    return (
        <View style={styles.container}>
            {isImage ? (
                <View style={styles.backButton}>
                    <IconButton size={35} name='step-backward' />
                </View>
            ) : ("")}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        height: 40,
        bottom: 0,
        width: '100%',
        position: 'absolute',
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    backButton: {
        justifyContent: 'center',
    }
});

//make this component available to the app
export default SKLoginFooterWithBack;
