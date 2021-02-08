import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Modal, TextInput, Alert } from 'react-native';
import { THEME } from '../theme';

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Ошибка', `Минимальная длина текста 3 символа. Сейчас ${title.trim().length} символов`)
        } else {
            onSave(title)
        }
    }

    return (
        <Modal
            visible={visible}
            animationType='slide'
        >
            <View style={styles.wrap}>
                <TextInput 
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input} 
                    placeholder='Введите текст' 
                    autoCapitalize='none' 
                    autoCorrect={false}
                />
                <View style={styles.buttonWrapper}>
                    <Button title="Отменить" onPress={onCancel} color={THEME.DANGER_COLOR} />
                    <Button title="Сохранить" onPress={saveHandler} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        padding: '5%',
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        marginBottom: '5%',
    },
    buttonWrapper: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});