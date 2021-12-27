var firebaseConfig = {
    apiKey: "AIzaSyAY8dtbKmegqV4LKJx8IOR8i8ztr0y0VIs",
    authDomain: "letschatapp-f7adb.firebaseapp.com",
    databaseURL: "https://letschatapp-f7adb-default-rtdb.firebaseio.com",
    projectId: "letschatapp-f7adb",
    storageBucket: "letschatapp-f7adb.appspot.com",
    messagingSenderId: "405839774271",
    appId: "1:405839774271:web:8ce6bcc8aa9a24cc012e8a"
};
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");
document.getElementById("roomNameHeader").innerText = "Room Name: " + roomName;

function send() {
    newMessage = document.getElementById("messageTextInput").value;
    firebase.database().ref(roomName).push({
          name: userName,
          message: newMessage,
          like: 0
    });
    document.getElementById("messageTextInput").value = "";
    output = "<h3 style='text-decoration: underline;'>" + userName + "</h3> <p> " + newMessage + "</p>";
    document.getElementById("output").innerHTML += output;
}

function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebaseMessageID = childKey;
                      messageData = childData;
                      //Start code
                      //End code
                }
          });
    });
}
getData();

function logOut() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}