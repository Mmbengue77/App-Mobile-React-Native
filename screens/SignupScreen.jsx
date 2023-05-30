// IMPORTS & DEPS
import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput, Pressable, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomButton } from '../components';


export default function SignupScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passConf, setPassConf] = useState('');
    const [alert, setAlert] = useState({  obj : '', message : '' })


    const handleSignup = () => {
        // Form inputs validation
        !email || email === ''
        ? setAlert({ obj : "email", message : "Please enter your email address"})
        : !pass || pass === ''
            ? setAlert({ obj : "pass", message : "Please provide a password"})
            : !passConf || passConf === ''
                ? setAlert({ obj : "passConf", message : "Please enter the password again"})
                : pass !== passConf
                    ? setAlert({ obj : "passCompare", message : "Passwords do not match"})
                    : (
                        setAlert({ obj : "signOk", message : ("Signup "+email+" successful")}),
                        signupUser(email)
                    )
    };
    const signupUser = (user) => {
        console.log("Signup ", user, " successful")
    }


return (
    <View style={styles.BG}>
        <LinearGradient 
        colors={['#F1F1F2', '#C0DBEA']} 
        style={styles.BG_LrGr} >
            <View style={styles.signupForm}>

                {alert.obj === "signOk"
                ? <Text style={styles.alertValid}>{alert.message}</Text> 
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
                ? <Text style={styles.alertWarn}>{alert.message}</Text> 
                : null}


                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={setPass}
                    value={pass}
                    style={styles.input}
                />
                {alert.obj === "pass"
                ? <Text style={styles.alertWarn}>{alert.message}</Text> 
                : alert.obj === "passCompare"
                    ? <Text style={styles.alertWarn}>{alert.message}</Text> 
                    : null
                }

                <TextInput
                    placeholder="Confirm password"
                    secureTextEntry
                    onChangeText={setPassConf}
                    value={passConf}
                    style={styles.input}
                />
                {alert.obj === "passConf"
                ? <Text style={styles.alertWarn}>{alert.message}</Text> 
                : alert.obj === "passCompare"
                    ? <Text style={styles.alertWarn}>{alert.message}</Text> 
                    : null
                }


                <CustomButton label="Signup" 
                onPress={()=>handleSignup()} />
            </View>
        </LinearGradient>
    </View>
)}



// Styles
const styles = StyleSheet.create({
    BG: {
        flex: 1,
    },
    BG_LrGr: {
        flex: 1,
    },
    signupForm: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '70%',
        paddingVertical: 8,
        paddingHorizontal: 18,
        marginTop: 16,
        textAlign: 'center',
        fontSize: 21,
        borderWidth: 1,
        borderColor: '#456',
        borderRadius: 12,
        color: '#000',
    },
    alertWarn: {
        color: "#a30000"
    },
    alertValid: {
        color: "#55592e"
    },
})