import React from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';

export const AddElem = ({ onSubmit }) => {
    const [value, setValue] = React.useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Добавление пустого поля невозможно!');
        }
    }

    return (
        <View style={styles.wrapper}>
            <TextInput 
                style={styles.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Введите текст"
                // autoCorrect={false}
                // keyboardType={numeric}
            />
            <Button title='Добавить' onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        paddingHorizontal: 10,
        paddingLeft: '5%',
        paddingRight: '5%',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        marginRight: '5%',
    },
});