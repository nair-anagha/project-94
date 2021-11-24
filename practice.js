
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCXZDuyG2FO1aKRrj93xPXdCqLNaRwS5CI",
    authDomain: "project-94-9bb26.firebaseapp.com",
    databaseURL: "https://project-94-9bb26-default-rtdb.firebaseio.com",
    projectId: "project-94-9bb26",
    storageBucket: "project-94-9bb26.appspot.com",
    messagingSenderId: "894636012400",
    appId: "1:894636012400:web:e9ee5d30b2abe8bee8d5b5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user"
      })
  }


