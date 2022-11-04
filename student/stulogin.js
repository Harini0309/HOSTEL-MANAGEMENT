
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA5TrsWk4BNkWan7gzcFstqV8J2eP38f_k",
    authDomain: "outpass-53c71.firebaseapp.com",
    databaseURL: "https://outpass-53c71-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "outpass-53c71",
    storageBucket: "outpass-53c71.appspot.com",
    messagingSenderId: "110278579590",
    appId: "1:110278579590:web:04bbc42beda01a4d748807",
    measurementId: "G-K7ZGN70GPT"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();


  //signup function
  function signUp(){
    signOut(0)
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
    authstatus()
  }
  
  //signIN function
  function  signIn(){
    signOut(0)
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));

    authstatus()
}


//signOut

function signOut(n){
    auth.signOut();
    if (n==1)
    {
      alert("SignOut Successfully from System");
    }
}

//active user to homepage
function authstatus()
{  
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        var email = user.email;
        alert("Active user "+email);
        window.location.href = "studentportal.html"

        

        
    }else{
    //   alert("No Active user Found")
    }
  })

}