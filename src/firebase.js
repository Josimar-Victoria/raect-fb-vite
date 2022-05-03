import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDd2ZvDfmP5AufpfS48-q8TyIZ5DAPD-O4',
  authDomain: 'react-fb-vite.firebaseapp.com',
  projectId: 'react-fb-vite',
  storageBucket: 'react-fb-vite.appspot.com',
  messagingSenderId: '715758496738',
  appId: '1:715758496738:web:f7ba72472e55b85a91a7bb'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
