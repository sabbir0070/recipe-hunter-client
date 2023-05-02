import React, { createContext, useEffect, useState} from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
// user create email account
const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  const githubSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // login system 
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // handleLogout
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

// updateProfileName and photo url
  const updateProfileAndPhoto = (user, name, photo) => {
    setLoading(true)
    return updateProfile(user, {
      displayName: name, photoURL: photo
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    };
  }, [])



const authInfo = {
user,
createUser,
signInUser,
googleSignIn,
githubSignIn,
logOut,
updateProfileAndPhoto,


}

  return (
    <AuthContext.Provider value={authInfo}>
       {children}
   </AuthContext.Provider>
  );
};

export default AuthProviders;