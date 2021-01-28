import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ElemList = ({ elem }) => {
    return (
        <View style={styles.elemlist}>
            <Text>{elem.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    elemlist: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 5,
    }
});