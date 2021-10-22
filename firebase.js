import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyB80Gdhng3e45r6XWz-pYlY3-pfiizvXSU",
  authDomain: "docs-clone-arnob.firebaseapp.com",
  projectId: "docs-clone-arnob",
  storageBucket: "docs-clone-arnob.appspot.com",
  messagingSenderId: "630281140529",
  appId: "1:630281140529:web:8c2d06f00c83157dc29810"
};

const app = !firebase.apps.length ? firebase.initializeApp(FirebaseConfig) : firebase.app()