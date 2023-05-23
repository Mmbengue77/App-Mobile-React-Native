import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { app, storage, auth } from '../lib';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Utilisateur inscrit avec succès
        console.log('Utilisateur inscrit :', userCredential.user);
      })
      .catch((error) => {
        // Erreur lors de l'inscription
        console.log('Erreur lors de l\'inscription :', error);
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
      <Button title="S'inscrire" onPress={handleRegister} />
    </View>
  );
};

export default RegisterForm;
