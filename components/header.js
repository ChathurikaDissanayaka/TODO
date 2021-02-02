import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text, View} from 'react-native';

function header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor:'dodgerblue',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',

    },
})

export default header;