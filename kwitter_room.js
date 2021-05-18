var firebaseConfig = {
  apiKey: "AIzaSyBCUGt7KFdIUP-Kgya8VpZ3B4h9uP07goY",
  authDomain: "kwitter-d58b7.firebaseapp.com",
  databaseURL: "https://kwitter-d58b7-default-rtdb.firebaseio.com",
  projectId: "kwitter-d58b7",
  storageBucket: "kwitter-d58b7.appspot.com",
  messagingSenderId: "426386250237",
  appId: "1:426386250237:web:eaf95c695cb5dd177d6194"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


  function addRoom()
    {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({ // this is used to to storethe data in database 
              purpose : "adding room name"
        });
        localStorage.setItem("room_name" , room_name);  // this will set the key and value in the local storage

        window.location = "kwitter_page.html";  // this will redirect to kwitter_page.html
    }



    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 row = "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+ Room_names + "</div> <hr>";
 document.getElementById("output").innerHTML +=row;
 //End code
 });});}
getData();

function redirecttoroomname (name)
{
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("rom_name");
  window.location = "index.html";
}
