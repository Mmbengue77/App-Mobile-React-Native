// IMPORTS & DEPS
import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomButton } from '../components';



export default function LaunchScreen({navigation}) {
    console.log(navigation)
// Rendu
return (
    <View style={styles.BG}>
        <LinearGradient 
        // colors={['rgba(78,200,200,1)', 'rgba(34,34,34,1)']} 
        colors={['rgba(153,166,245,1)', 'rgba(29,213,143,1)']} 
        style={styles.BG_LG} >
            <SafeAreaView style={styles.container}>
                
                <View style={styles.logo}>
                </View>

            </SafeAreaView>
        </LinearGradient>
    </View>
)}



// Styles
const styles = StyleSheet.create({
    BG: {
        flex: 1,
    },
    container: {
        flex: 1,
    },

})