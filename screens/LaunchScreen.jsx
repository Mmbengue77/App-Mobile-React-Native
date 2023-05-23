// IMPORTS & DEPS
import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, Image, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomButton } from '../components';



export default function LaunchScreen({navigation}) {
// Rendu
return (
    <View style={styles.BG}>
        <LinearGradient 
        colors={['rgba(84,84,84,1)', 'rgba(34,34,34,1)']} 
        style={styles.BG_LG} >
            <SafeAreaView style={styles.container}>
                
                <View style={styles.logo}>
                    <Image source={require('../assets/images/launch2.png')}
                    style={styles.logoImg} />
                    <Text style={styles.title}>ScoreTube</Text>
                    <Text style={styles.slogan}> WHERE SPORTS AND ENTERTAINMENT COLLIDE</Text>
                </View>
                

                <View style={styles.groupeBtns}>
                    <CustomButton label={"Login"}
                    onPress={()=>navigation.navigate('LoginScreen')} />

                    <View style={styles.divider} />

                    <CustomButton outline label="Sign up" 
                    onPress={()=>navigation.navigate('SignupScreen')} />
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
    BG_LG: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    logoImg: {
        width: 140,
        height: 162,
    },
    title: {
        color: '#FFF',
        fontSize: 52,
        fontWeight: 'bold',
        marginTop: 32,
    },
    slogan: {
        color: '#fff',
        fontSize: 11,
        marginTop: 8,
    },
    
    groupeBtns: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 120,
    },
    divider: {
        marginHorizontal: 20,
    },


})