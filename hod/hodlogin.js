// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBHiWRlkDIGHWm8p5qE981RrK1aEfyrJyE",
  authDomain: "outpass-hod.firebaseapp.com",
  projectId: "outpass-hod",
  storageBucket: "outpass-hod.appspot.com",
  messagingSenderId: "31358196775",
  appId: "1:31358196775:web:e295fd9f114306488fc202"
};



  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function not used
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
    window.location.href = "hodportal.html"
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
        window.location.href = "hodportal.html"

        

    }else{
      
    }
  })
//<script>
function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
//</script>
}