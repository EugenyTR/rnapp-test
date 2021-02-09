import React from 'react';
import {StyleSheet, View, FlatList, Image} from 'react-native';
import { AddElem } from '../components/AddElem';
import { ElemList } from '../components/ElemList';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
    let content = (
    <FlatList 
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (<ElemList todo={item} onRemove={removeTodo} onOpen={openTodo} />)}
    />
    )

    if (todos.length === 0) {
        content = <View style={styles.imageWrapp}>
            <Image 
                style={styles.image}
                source={require('../../assets/file.png')}
                // source={{
                //     uri: ''
                // }}
                resizeMode='contain'
            />
        </View>
    }

    return (
        <View>
            <AddElem onSubmit={addTodo} />

            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    imageWrapp: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    }
});