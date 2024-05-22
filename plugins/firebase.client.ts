import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {
  const firebaseConfig = {
    apiKey: 'AIzaSyDn7hgN7mrRha3VYEHAoU3qJ-tyy3pWxzw',
    authDomain: 'dev-nutri-f82b4.firebaseapp.com',
    projectId: 'dev-nutri-f82b4',
    storageBucket: 'dev-nutri-f82b4.appspot.com',
    messagingSenderId: '166959560742',
    appId: '1:166959560742:web:c7589f3aec24065c2f8ee7',
  }

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);

return {
    provide:{
        auth,
    }
}

})
