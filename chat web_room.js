const firebaseConfig = {
      apiKey: "AIzaSyCaryUPacIl8649i-H4Wk3oojs7yq9MWsc",
      authDomain: "let-s-chat-web-app-a8102.firebaseapp.com",
      databaseURL: "https://let-s-chat-web-app-a8102-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-web-app-a8102",
      storageBucket: "let-s-chat-web-app-a8102.appspot.com",
      messagingSenderId: "926636117246",
      appId: "1:926636117246:web:231e336b0fb35d6cf169af",
      measurementId: "G-FW7302R5YM"
    };
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

function add_room(){
      room_names = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_names).update({
            purpose:"Hello Ranveer "
      });
      localStorage.setItem("room name",room_names);
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - "+ Room_names);
row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();