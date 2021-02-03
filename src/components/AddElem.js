import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';

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
      <Button title="Добавить" color="#333" onPress={pressHandler} />
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
      borderBottomColor: '#999',
      paddingBottom: 3,
  },
  button: {
   borderRadius: 20,
  },
});