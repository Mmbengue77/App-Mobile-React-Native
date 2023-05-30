// IMPORTS & DEPS
import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput, Pressable, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomButton } from '../components';


export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [alert, setAlert] = useState({  obj : '', message : '' })

    const handleLogin = () => {
        !email || email === ''
        ? setAlert({ obj : "email", message : "Email address can not be empty"})
        : !pass || pass === ''
            ? setAlert({ obj : "pass", message : "Password can not be empty"})
            : ( setAlert({ obj : "loginOk", message : ("Login "+email+" successful")}),
              loginUser(email) )
    };
    const loginUser = (user) => {
        console.log("Login ", user, " successful")
    }

    return (
    <View style={styles.BG}>
        <LinearGradient 
        colors={['rgba(153,166,245,1)', 'rgba(29,213,143,1)']} 
        style={styles.BG_LnGr} >
            <View style={styles.loginForm}>

                {alert.obj === "loginOk"
                ? <View style={styles.alertValid_BG}><Text style={styles.alertMess}>{alert.message}</Text></View>
                : null}

                <TextInput
                    keyboardType='email-address'
                    placeholder="Email address"
                    onChangeText={setEmail}
                    value={email}
                    style={styles.input}
                    textAlign={'center'}
                />
                {alert.obj === "email"
                ? <View style={styles.alertWarn_BG}><Text style={styles.alertMess}>{alert.message}</Text></View>
                : null}
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={setPass}
                    value={pass}
                    style={styles.input}
                />
                {alert.obj === "pass"
                ? <View style={styles.alertWarn_BG}><Text style={styles.alertMess}>{alert.message}</Text></View>
                : null}
                <CustomButton label="Login" 
                onPress={()=>handleLogin()} />

                <Pressable 
                onPress={()=>navigation.navigate('RecoverPassScreen')}
                style={styles.btnFrame_recover}>
                    <Text style={styles.btnLabel_recover}>
                        Forgot password?
                    </Text>
                </Pressable>
            </View>
        </LinearGradient>
    </View>
)}



// Styles
const styles = StyleSheet.create({
    BG: {
        flex: 1,
    },
    BG_LnGr: {
        flex: 1,
    },
    loginForm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '70%',
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginTop: 12,
        textAlign: 'center',
        fontSize: 21,
        borderWidth: 1,
        borderColor: '#456',
        borderRadius: 12,
        color: '#000',
    },

    alertWarn_BG: {
        paddingHorizontal: 14,
        paddingVertical: 2,
        backgroundColor: '#a30000',
    },
    alertValid_BG: {
        paddingHorizontal: 14,
        paddingVertical: 2,
        backgroundColor: '#7e8542',
    },
    alertMess: {
        color: "#fff"
    },

    btnFrame_recover: {
        marginVertical: 16,
        paddingVertical: 8,
        paddingHorizontal: 0,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#4273c7',
    },
    btnLabel_recover: {
        fontSize: 16,
        fontFamily: 'Verdana',
        color: '#4273c7',
    },

})