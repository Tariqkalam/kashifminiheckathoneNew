// setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyCD4IRBkWwmif1YpLMWzMGCDgpyAwgQ50Q",
  authDomain: "miniheckathonenew.firebaseapp.com",
  projectId: "miniheckathonenew",
  storageBucket: "miniheckathonenew.appspot.com",
  messagingSenderId: "954421113497",
  appId: "1:954421113497:web:924d7eec98f3e2c7073e08"
 });
   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

//    sign up function

const signup=()=>{
     const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;
    //  console.log(email,password);
     


    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        // sign up
        document.write("you are signed up")
        console.log(result)
      
      
      // ...
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      
      // ..
    });
}


// sign in function

const signin = ()=>{
    const email = document.getElementById("email").value;
     const password = document.getElementById("password").value;
    
     firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in
    document.write("you are signed in")
    console.log(result)
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}



