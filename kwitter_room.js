var firebaseConfig = {
  apiKey: "AIzaSyCsjgbI1_UXswDG8_PGA-IyjAelh-UWZCg",
  authDomain: "letschat-webb-app.firebaseapp.com",
  databaseURL: "https://letschat-webb-app-default-rtdb.firebaseio.com",
  projectId: "letschat-webb-app",
  storageBucket: "letschat-webb-app.appspot.com",
  messagingSenderId: "630648131316",
  appId: "1:630648131316:web:6532dca67d841508e458a1",
  measurementId: "G-V4HKYN1123"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

 function addRoom(){
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
   });
   localStorage.setItem("room_name", room_name);
   window.location = "kwitter.page.html";
 }