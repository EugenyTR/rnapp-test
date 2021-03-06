import React, {useState} from 'react';
import { StyleSheet,  View, Alert } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import {Navbar} from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { ElemScreen } from './src/screens/ElemScreen';

async function loadApp() {
  await Font.loadAsync({
    'robotoBold': require('./assets/fonts/Roboto-Bold.ttf'),
    'robotoLight': require('./assets/fonts/Roboto-Light.ttf'),
  })
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  if (!isReady) {
    return (
        <AppLoading 
          startAsync={loadApp} 
          onError={err => console.log(err)} 
          onFinish={() => setIsReady(true)}
        />
      )
  }

  const addTodo = (title) => {
    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }]);
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id === id);

    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: 'cancel',
        },
        {
          text: "Удалить",
          style: 'destructive',
          onPress: () => {
            setTodoId(null)
            setTodos(prev => prev.filter(todo => todo.id !== id));
          },
        },
      ],
      {cancelable: false}
    )
  }

  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo;
    }))
  }

  let content = <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={id => {
    setTodoId(id)
  }} />

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <ElemScreen 
      onRemove={removeTodo} 
      goBack={() => setTodoId(null)} todo={selectedTodo}
      onSave={updateTodo}
    />
  }

  return (
    <View>
      <Navbar title="Заголовок приложения" />
      <View style={styles.container}>
        {content}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
