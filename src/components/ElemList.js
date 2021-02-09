import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

export const ElemList = ({ todo, onRemove, onOpen }) => {
    return (
    <TouchableOpacity 
        activeOpacity={0.2}
        onPress={() => onOpen(todo.id)}
        onLongPress={onRemove.bind(null, todo.id)}
    >
            <View style={styles.todo}>
                <Text style={styles.title}>{todo.title}</Text>
            </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    },
    title: {
        fontFamily: 'robotoBold',
    }
});