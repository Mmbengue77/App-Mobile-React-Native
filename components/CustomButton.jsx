// rnfs
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomButton(props) {
return (
    <Pressable onPress={props.onPress} 
        style={()=>
        props.outline 
        ? [styles.btnFrame, styles.outline] :
        styles.btnFrame
    }>
        <Text style={styles.btnLabel}>{props.label}</Text>
    </Pressable>
)}

const styles = StyleSheet.create({
    btnFrame: {
        backgroundColor: '#F9D949',
        borderRadius: 6,
        paddingVertical: 10,
        paddingHorizontal: 28,
        marginTop: 12,
        marginBottom: 12,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#F9D949',
    },
    btnLabel: {
        color: '#777',
        fontWeight: '500',
        fontSize: 20,
    }
})