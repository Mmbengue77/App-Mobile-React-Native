import React from 'react';
// import { View } from 'react-native';
// import { auth } from './lib/firebase';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { LinearGradient } from 'expo-linear-gradient';

import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { HomeScreen, LaunchScreen, LoginScreen, SignupScreen, UserScreen } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { app, storage, auth } from './lib';

import { CustomButton } from './components' ;
import RegisterForm from './screens/RegisterForm';
import LoginForm from './screens/LoginForm';
import CreatePostForm from './screens/CreatePostForm';
import PostList from './screens/PostList';
import UserProfile from './screens/UserProfile';

const App = () => {
  const [user, setUser] = React.useState(null); 

  React.useEffect(() => {
    // Vérifier si un utilisateur est déjà connecté
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      // Se désabonner de l'écoute des changements d'état d'authentification lorsque le composant est démonté
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        // Utilisateur déconnecté avec succès
        console.log('Utilisateur déconnecté avec succès');
      })
      .catch((error) => {
        // Erreur lors de la déconnexion
        console.log('Erreur lors de la déconnexion :', error);
      });
  };

  return (
    <View style={styles.BG}>
      {user ? (
        <>
          <CreatePostForm user={user} />
          <PostList />
          <UserProfile user={user} />
          <Button title="Se déconnecter" onPress={handleLogout} />
        </>
      ) : (
      //   <><RegisterForm /> <LoginForm /></>

        <LinearGradient 
        // colors={['rgba(78,200,200,1)', 'rgba(34,34,34,1)']} 
        colors={['rgba(153,166,245,1)', 'rgba(29,213,143,1)']} 
        style={styles.BG_LG} >
            <SafeAreaView style={styles.container}>
                
                <View style={styles.logo}>
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.slogan}>Share your happiness with all the world</Text>
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
        
      )}
    </View>
    
  );
};

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
      fontSize: 14,
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



export default App;
