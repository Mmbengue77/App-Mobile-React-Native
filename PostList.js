import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { db } from './firebase';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Récupérer la liste des posts depuis Firestore
    const unsubscribe = db.collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(newPosts);
      });

    return () => {
      // Se désabonner de la mise à jour des posts lorsque le composant est démonté
      unsubscribe();
    };
  }, []);

  return (
    <View>
      {posts.map((post) => (
        <View key={post.id}>
          <Text>{post.text}</Text>
          <Text>{post.imageUrl}</Text>
        </View>
      ))}
    </View>
  );
};

export default PostList;
