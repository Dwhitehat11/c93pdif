const firebaseConfig = {
    apiKey: "AIzaSyA-vFfQu-G8lY0u8hgb8CUG2jCZb_mBOyY",
    authDomain: "p93con.firebaseapp.com",
    projectId: "p93con",
    storageBucket: "p93con.appspot.com",
    messagingSenderId: "1059506127372",
    appId: "1:1059506127372:web:0855b3ebc3181856eae429",
    measurementId: "G-35MZFL99VP"
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
});});}
getData();
function redirectToRoomName
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function addroom()
{
    room_name = document.getElementById("room_name").Value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}
function logout() {
    localStorage,removeItem("user_name");
    localStorage,removeItem("room_name");
window.location="index.html";
}
   //End code
