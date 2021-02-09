import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const AppTextBold = props => {
    return (
        <Text style={{ ...styles.default, ...props.style }}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'robotoBold',
    }
});