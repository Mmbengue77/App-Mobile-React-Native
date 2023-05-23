import React from 'react';
import { View } from 'react-native';
import { firebase } from './firebase';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import CreatePostForm from './CreatePostForm';
import PostList from './PostList';
import UserProfile from './UserProfile';

const App = () => {
  const [user, setUser] = React.useState(null); 

  React.useEffect(() => {
    // Vérifier si un utilisateur est déjà connecté
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      // Se désabonner de l'écoute des changements d'état d'authentification lorsque le composant est démonté
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut()
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
    <View>
      {user ? (
        <>
          <CreatePostForm user={user} />
          <PostList />
          <UserProfile user={user} />
          <Button title="Se déconnecter" onPress={handleLogout} />
        </>
      ) : (
        <>
          <RegisterForm />
          <LoginForm />
        </>
      )}
    </View>
  );
};

export default App;
