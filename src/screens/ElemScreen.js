import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export const ElemScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <Button title='Назад' onPress={goBack} />
        </View>
    );
}

const styles = StyleSheet.create({

});