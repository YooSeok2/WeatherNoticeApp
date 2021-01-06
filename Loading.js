import React from 'react';
import {StyleSheet, Text, View, StatusBar } from "react-native";


export default function Loading(){
   return (
    <View style={styles.container}>
        <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='dark-content'></StatusBar>
        <Text style={styles.title}>Getting the Awesome weather</Text>
    </View>
    );
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'flex-end',
        paddingHorizontal : 30,
        paddingVertical : 100,
        backgroundColor : '#FDF6AA'
    },
    title : {
        fontSize : 25,
        color : "#2c2c2c"
    }
})