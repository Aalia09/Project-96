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
  room_name = localStorage.getItem("room_name");


  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0

        });
  }