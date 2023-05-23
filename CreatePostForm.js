import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { db, storage } from './firebase';

const CreatePostForm = ({ user }) => {
  const [text, setText] = useState('');
  const [imageUri, setImageUri] = useState('');

  const handleCreatePost = () => {
    // Créer un nouveau document dans la collection "posts" de Firestore
    const postRef = db.collection('posts').doc();
    const postId = postRef.id;

    // Charger l'image dans Firebase Storage
    const imageRef = storage.ref().child(`images/${postId}`);
    imageRef.putFile(imageUri)
      .then(() => {
        // Récupérer l'URL de téléchargement de l'image
        return imageRef.getDownloadURL();
      })
      .then((imageUrl) => {
        // Enregistrer les détails du post dans Firestore
        return postRef.set({
          text,
          imageUrl,
          userId: user.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
      .then(() => {
        // Post créé avec succès
        console.log('Post créé avec succès');
      })
      .catch((error) => {
        // Erreur lors de la création du post
        console.log('Erreur lors de la création du post :', error);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Texte du post"
        onChangeText={setText}
        value={text}
      />
      <TextInput
        placeholder="URL de l'image"
        onChangeText={setImageUri}
        value={imageUri}
      />
      <Button title="Créer un post" onPress={handleCreatePost} />
    </View>
  );
};

export default CreatePostForm;
