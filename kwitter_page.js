//YOUR FIREBASE LINKS
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
  
    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.datatbase().ref(room_name).push({
            user:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = ""; 
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        console.log(firebase_message_id);
        console.log(message_data);
        user = message_data['user'];
        message = message_data['message'];
        like = message_data['like'];
        name_with_tag = "<h4>" + user + "<img class='user_tick' src='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button = "<button class='btn btn-warning' id=" + like_id + "value" + like + "onclick='updateLike(this.id)'>";
        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
        row = name_with_tag + message_with_tag + span_with_tag;
        document.getElementById("output").innerHTML = row;
//End code
      } });  }); }
      getData();

      function updateLike(like_id) {
            console.log("Like Button Clicked" + like_id);
            button_id = like_id;
            likes = document.getElementById(button_id).value;
            updated_likes = Number(likes) + 1;
            console.log(updated_likes);
            firebase.database().ref(room_name).child(message_id).update({ like : updated_likes});
      }
