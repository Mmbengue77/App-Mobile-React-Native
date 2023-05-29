// IMPORTS & DEPS
import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TextInput, Pressable, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomButton } from '../components';


export default function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleLogin = () => {
        let validInputs = true;
        console.log('Button login pressed');
        email ? null : ()=>{
            console.log("Mail address can not be empty");
            validInputs = false;
        };
        pass ? null : ()=>{
            console.log("Password can not be empty");
            validInputs = false;
        }

        !validInputs ? null : ()=>{
            
        }
    };

    return (
    <View style={styles.BG}>
        <LinearGradient 
        colors={['rgba(153,166,245,1)', 'rgba(29,213,143,1)']} 
        style={styles.BG_LnGr} >
            <SafeAreaView style={styles.safeContainer}>
                <View style={styles.loginForm}>
                    <TextInput
                        keyboardType='email-address'
                        placeholder="Mail address"
                        onChangeText={setEmail}
                        value={email}
                        style={styles.input}
                        textAlign={'center'}
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={setPass}
                        value={pass}
                        style={styles.input}
                    />
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
            </SafeAreaView>
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
    safeContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    loginForm: {
        flex: 1,
        borderColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '70%',
        paddingTop: 12,
        paddingRight: 18,
        paddingBottom: 12,
        paddingLeft: 18,
        marginTop: 12,
        textAlign: 'center',
        fontSize: 22,
        borderWidth: 1,
        borderColor: '#456',
        borderRadius: 20,
        color: '#000',
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