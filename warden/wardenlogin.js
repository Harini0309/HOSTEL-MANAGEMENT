// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDnmMzgeu_SvsSF9LUktZ_kYghBvQ4Ws2M",
    authDomain: "outpass-incharge.firebaseapp.com",
    projectId: "outpass-incharge",
    storageBucket: "outpass-incharge.appspot.com",
    messagingSenderId: "897316027554",
    appId: "1:897316027554:web:a417eca1202a25ba24abfb",
    measurementId: "G-34KYERZ8Z4"
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
    window.location.href = "studentportal.html"
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
        window.location.href = "wardenportal.html"

        

    }else{
      
    }
  })

}