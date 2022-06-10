
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDfyHZksxtWBAZuTlyVyEV-2wiFKIhcRu8",
  authDomain: "outfit-mall-db.firebaseapp.com",
  projectId: "outfit-mall-db",
  storageBucket: "outfit-mall-db.appspot.com",
  messagingSenderId: "334874185450",
  appId: "1:334874185450:web:c1bca86df505ed887f1193"
};

const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt:'select_account' })

// export const auth = getAuth();  // export const signInWithGooglePopup = _ => signInWithPopup(auth, provider);

export const signInWithGooglePopup = _ => signInWithPopup(getAuth(), provider);


export const db = getFirestore();

export const createUserDoc4rmAuth = async (userAuthObj) => { 
  const userDocRef = doc(db, 'users', userAuthObj.uid);
  console.log(userDocRef); 
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuthObj;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {displayName, email, createdAt})
    } catch (error) {
      console.log(`error creating user data ${error}`);
    }
  }

  console.log(`user already exist`);

  return userDocRef;
  
}
