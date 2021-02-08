import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import { THEME } from '../theme';

export const AddElem = ({ onSubmit }) => {
  const [value, setValue] = useState('');



  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Название дела не может быть пустым');
    }
  }

  return (
    <View style={styles.wrapper}>
      <TextInput 
        style={styles.input}
        onChangeText={text => setValue(text)}
        value={value}
        placeholder="Введите название дела"
      />
      <Button title="Добавить" color={THEME.GREY_COLOR} onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
      width: '70%',
      padding: 10,
      borderStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: THEME.MAIN_COLOR,
      paddingBottom: 3,
  },
  button: {
   borderRadius: 20,
  },
});