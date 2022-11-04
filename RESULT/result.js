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

function save_final(num) {
  var rollno = document.getElementById("rollno").value;
  console.log(rollno);
  database.ref("save_final/" + rollno).set({
    rollno: rollno,
    key: num,
  });
}

function get_final_details() {
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
    
    alert(data.email);
  });
}

function get_key(rollno) {
  var save_final = database.ref("save_final/" + rollno);
  var key;
  save_final.on("value", function(snapshot)
  {
    var data = snapshot.val();
    
    
    key = data.key; 
    console.log(key);
    JsBarcode("#barcode", key)



    
  })




}
// document.getElementById("gen_out").addEventListener('click', function(){
// function get_barcode() {

//   var rollno = document.getElementById("rollno").value;
//   if (rollno in new_users) {
//     var key = get_key(rollno);
//     JsBarcode("#barcode", key);
//   } else {
//     var key = Math.floor(Math.random() * 10000 + 1);
//     JsBarcode("#barcode", key);
//     save_final(key);
//   }
// }
