import React, { useState } from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { EditModal } from '../components/EditModal';
import { AppCard } from '../components/ui/AppCard';
import { THEME } from '../theme';

export const ElemScreen = ({ goBack, todo, onRemove, onSave }) => {
    const [modal, setModal] = useState(false);

    const saveHandler = (title) => {
        onSave(todo.id, title);
        setModal(false);
    }

    return (
        <View>
            <EditModal 
                value={todo.title}
                visible={modal} 
                onCancel={() => setModal(false)} 
                onSave={saveHandler}
            />

            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title="Редактировать" onPress={() => setModal(true)} />
            </AppCard>
            
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='Назад' color={THEME.GREY_COLOR} onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button 
                        title='Удалить' 
                        color={THEME.DANGER_COLOR} 
                        onPress={() => onRemove(todo.id)} 
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%',
        marginTop: '5%',
    },
    title: {
        fontSize: 20,
    },
    card: {
        marginBottom: '2%',
        padding: '3%',
    }
});