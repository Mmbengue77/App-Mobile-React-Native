import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { firebase, db, storage } from './firebase';

const UserProfile = ({ user }) => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  const handleUpdateProfile = () => {
    // Mettre à jour le profil utilisateur dans Firestore
    db.collection('users').doc(user.uid).update({
      name,
      bio,
    })
      .then(() => {
        // Profil utilisateur mis à jour avec succès
        console.log('Profil utilisateur mis à jour avec succès');
      })
      .catch((error) => {
        // Erreur lors de la mise à jour du profil utilisateur
        console.log('Erreur lors de la mise à jour du profil utilisateur :', error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Nom"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder="Biographie"
        onChangeText={setBio}
        value={bio}
      />
      <Button title="Mettre à jour le profil" onPress={handleUpdateProfile} />
    </View>
  );
};

export default UserProfile;
