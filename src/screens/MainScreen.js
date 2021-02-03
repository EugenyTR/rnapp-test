import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import { AddElem } from '../components/AddElem';
import { ElemList } from '../components/ElemList';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    return (
        <View>
            <AddElem onSubmit={addTodo} />

            <FlatList 
            keyExtractor={item => item.id.toString()}
            data={todos}
            renderItem={({ item }) => (<ElemList todo={item} onRemove={removeTodo} onOpen={openTodo} />)}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});