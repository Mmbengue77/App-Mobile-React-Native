// IMPORTS & DEPS
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Pressable, } from 'react-native';


export default function RecoverPassScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [alert, setAlert] = useState({  obj : '', message : '' })
    const [btnName, setBtnName] = useState("Send recovery mail")

const handleRecoverySubmit = () => {
    !email || email === ''
    ? ( 
        setAlert({ obj : "email",  message : "Email address can not be empty"}) )
    : (setAlert({ obj : "sended", message : "Recovery mail sent to "+email}),
        setBtnName('Send email again'),
        console.log('Recovery mail sent.')) ;
    
}

return (
    <View style={styles.BG}>
        <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
                Please enter your account mail address, 
                so we will send you an email with all the instructions 
                to recover your account's password.
            </Text>
        </View>
        <View style={styles.recoveryFrom}>
            {alert.obj === "sended"
            ? <View style={styles.alertValid_BG}><Text style={styles.alertMess}>{alert.message}</Text></View>
            : null}
            <TextInput
                keyboardType='email-address'
                placeholder="Your mail address"
                onChangeText={setEmail}
                value={email}
                style={styles.input}
                textAlign={'center'}
            />

            {alert.obj === "email"
            ? <View style={styles.alertWarn_BG}><Text style={styles.alertMess}>{alert.message}</Text></View>
            : null}

            <Pressable 
            onPress={()=>handleRecoverySubmit()}
            style={styles.btnFrame}>
                <Text style={styles.btnLabel}>
                    {btnName}
                </Text>
            </Pressable>
        </View>
    </View>
)}


// Style of the screen
const styles = StyleSheet.create({
    BG: {
        paddingHorizontal: 20,
        flex: 1,
        paddingTop: 60,
    },
    infoContainer: {
        flex: 0,
        borderWidth: 0,
        marginVertical: 50,
    },
    infoText: {
        flex: 0,
        fontSize: 16,
    },
    recoveryFrom: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
    },
    input: {
        width: '80%',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderRadius: 0,
        borderColor: '#A1A1A1',
        fontSize: 17,
    },
    btnFrame: {
        flex: 0,
        marginVertical: 26,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#A1A1A1',
        paddingHorizontal: 24,
        paddingVertical: 8,
        backgroundColor: '#96e0aa',
    },
    btnLabel: {
        flex: 0,
        fontSize: 14,
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
})



