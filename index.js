// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA5TrsWk4BNkWan7gzcFstqV8J2eP38f_k",
    authDomain: "outpass-53c71.firebaseapp.com",
    databaseURL:
      "https://outpass-53c71-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "outpass-53c71",
    storageBucket: "outpass-53c71.appspot.com",
    messagingSenderId: "110278579590",
    appId: "1:110278579590:web:04bbc42beda01a4d748807",
    measurementId: "G-K7ZGN70GPT",
  };
  
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();
  
 function submit()
 {
     save();
   
 }

 function notifyHOD() {

  var email = "";
  var name = "";
  var rollno = document.getElementById("rollno").value;
  var user_ref = database.ref("users/" + rollno);

  user_ref.on("value", function (snapshot) {
    var data = snapshot.val();
    email = data.email;
    name = data.name;
    
  });


  Email.send({
    Host: "smtp.gmail.com",
    Username: "intelligentheistofficial@gmail.com",
    Password: "Heist@2077",
    To: "samplehod2077@gmail.com",
    From: "intelligentheistofficial@gmail.com",
    Subject: name+" has applied for outpass ["+rollno+"]",
    Body: email+" is the student's email  \n"+"Please visit this link to approve\n"+"http://127.0.0.1:5500/hod/hodlogin.html"
    
  }).then((message) => alert("Mail sent successfully"));
}

function notifyWD() {

  var email = "";
  var name = "";
  var rollno = document.getElementById("rollno").value;
  var user_ref = database.ref("users/" + rollno);

  user_ref.on("value", function (snapshot) {
    var data = snapshot.val();
    email = data.email;
    name = data.name;
    
  });

  Email.send({
    Host: "smtp.gmail.com",
    Username: "intelligentheistofficial@gmail.com",
    Password: "Heist@2077",
    To: "samplewarden2077@gmail.com",
    From: "intelligentheistofficial@gmail.com",
    Subject: name+" has applied for outpass ["+rollno+"]",
    Body: email+" is the student's email  \n"+"Please visit this link to approve\n"+"http://127.0.0.1:5500/warden/wardenlogin.html"
    
  }).then((message) => alert("Mail sent successfully"));
}


  function save() {
    var name = document.getElementById("name").value;
    var rollno = document.getElementById("rollno").value;
    var age = document.getElementById("age").value;
    var date = document.getElementById("dob").value;
    var email = document.getElementById("email").value;
    var branch = document.getElementById("branch").value;
    var year = document.getElementById("year").value;
    var phoneno = document.getElementById("phoneno").value;
    var parentphoneno = document.getElementById("parentphoneno").value;
  
    var hostelname = document.getElementById("hostelname").value;
    var fdate = document.getElementById("fdate").value;
    var tdate = document.getElementById("tdate").value;
    var mode = document.getElementById("mode").value;
    var letter = document.getElementById("letter").value;
    var queries = document.getElementById("queries").value;
    var status = "None";
    var oid = "oid";
    var reasonfdh = "None";
    var hodapproval = "None";
    var reasonfdw = "None";
    var wardenapproval = "None";
  
    database.ref("users/" + rollno).set({
      name: name,
      rollno: rollno,
      age: age,
      date: date,
      branch: branch,
      year: year,
      phoneno: phoneno,
      parentphoneno: parentphoneno,
      email: email,
  
      hostelname: hostelname,
      fdate: fdate,
      tdate: tdate,
      mode: mode,
      letter: letter,
      queries: queries,
      status: status,
      outpassid: oid + rollno,
      reasonfdh : reasonfdh,
      hodapproval : hodapproval,
      reasonfdw : reasonfdw,
      wardenapproval : wardenapproval
      
    });
    
    alert("Application submitted! Check mail for further details!");
    
  
  }
  
  function get() {
    var rollno = document.getElementById("rollno").value;
    var user_ref = database.ref("users/" + rollno);
  
    user_ref.on("value", function (snapshot) {
      var data = snapshot.val();
      document.getElementById("name").innerHTML = data.name;
      document.getElementById("rollno2").innerHTML = data.rollno;
      document.getElementById("branch").innerHTML = data.branch;
      document.getElementById("year").innerHTML = data.year;
      document.getElementById("phoneno").innerHTML = data.phoneno;
      document.getElementById("parentphoneno").innerHTML = data.parentphoneno;
      document.getElementById("email").innerHTML = data.email;
      document.getElementById("hostelname").innerHTML = data.hostelname;
      document.getElementById("fdate").innerHTML = data.fdate;
      document.getElementById("tdate").innerHTML = data.tdate;
      document.getElementById("mode").innerHTML = data.mode;
      document.getElementById("letter").innerHTML = data.letter;
      document.getElementById("queries").innerHTML = data.queries;
      document.getElementById("hodapproval").innerHTML = data.hodapproval;
      document.getElementById("reasonfdh").innerHTML = data.reasonfdh;
      alert(data.email);
   
    });

 
  
  }
  
 
  
  function remove() {
    var username = document.getElementById("username").value;
    database.ref("users/" + rollno).remove();
    alert("deleted");
  }
  
  function status() {
    if (document.getElementById("status").value == "approved") {
      alert("approved");
      update();
  
    }
    else{
    alert("disapproved");
    update();
    }
  }
  
  // function sendEmail() {
  // Email.send({
  // 	Host: "smtp.gmail.com",
  // 	Username: "intelligentheistofficial@gmail.com",
  // 	Password: "Heist@2077",
      // To: document.getElementById('email').value,
      // From: "intelligentheistofficial@gmail.com",
      // Subject: document.getElementById('name').value+" Your outpass is approved successfully!",
      // Body: "oid"+document.getElementById('rollno').value+" is your Outpass id"
  // })
  // 	.then(function (message) {
  // 	alert("mail sent successfully")
  // 	});
  // }
  
  function sendEmail() {
    var status = "";
    var reasonfd = "";
    var email = "";
    var name = "";
    var rollno = document.getElementById("rollno").value;
    var user_ref = database.ref("users/" + rollno);
  
    user_ref.on("value", function (snapshot) {
      var data = snapshot.val();
      email = data.email;
      name = data.name;
      status = data.status;
      reasonfd = document.getElementById("reasonfd").value;
    });
  
    alert("Message sent to " + email);
    Email.send({
      Host: "smtp.gmail.com",
      Username: "intelligentheistofficial@gmail.com",
      Password: "Heist@2077",
      To: email,
      From: "intelligentheistofficial@gmail.com",
      Subject: name+" Your outpass is "+status,
      Body: "oid"+rollno+" is your Outpass application id \n"+reasonfd
    }).then((message) => alert("Mail sent successfully"));
  }
  