import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet, Text, TouchableOpacity, View
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 

function todoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <AntDesign name="delete" size={18} color='#333' />
                <Text style={styles.itemText}>{item.todo}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row'
    },
    itemText:{
        marginLeft:10,
    }
})

export default todoItem;