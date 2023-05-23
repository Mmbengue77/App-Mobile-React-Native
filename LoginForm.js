import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { firebase } from './firebase';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Utilisateur connecté avec succès
        console.log('Utilisateur connecté :', userCredential.user);
      })
      .catch((error) => {
        // Erreur lors de la connexion
        console.log('Erreur lors de la connexion :', error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Adresse e-mail"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;
