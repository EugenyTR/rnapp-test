import React from 'react';
import { StyleSheet, TouchableHighlightComponent, View } from 'react-native';
import { THEME } from '../../theme';

export const AppCard = props => {
    return (
        <View style={{...styles.default, ...props.style}}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    default: {
        padding: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.7,
        shadowOffset: { width: 2, height: 2 },
        elevation: 4,
        backgroundColor: '#fff',
        borderRadius: 10,
    }
})