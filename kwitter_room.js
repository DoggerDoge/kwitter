
//ADD YOUR FIREBASE LINKS HERE

  // Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC0odYnq-mUJVgcBzJEmRNXWr8PYapOn_w",
    authDomain: "messageapp-56d75.firebaseapp.com",
    projectId: "messageapp-56d75",
    storageBucket: "messageapp-56d75.appspot.com",
    messagingSenderId: "418160584575",
    appId: "1:418160584575:web:7184ed6d62f0abbf7f5c4a"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName", userName);
  document.getElementById("userName").innerHTML=welcome + userName;

  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key; Room_names = childKey;
  
      //Start code
       console.log("Room Name Is " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><br>";
       document.getElementById("output").innerHTML += row;
       
      //End code
      });});}

      

getData();

function redirectToRoomName(Name) {
  console.log(Name);
  localStorage.setItem("Room_names", Name);
  window.location = "kwitter_room.html";
}
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
