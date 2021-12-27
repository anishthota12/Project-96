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
document.getElementById("welcomeTag").innerHTML = "Welcome " + userName + "!";

function addRoom() {
    roomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child("roomName").update({
        purpose: "Adding Room Name"
    });
    localStorage.setItem("roomName", roomName);
    window.location = "letschatpage.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name: " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div> <br>";
            document.getElementById("output").innerHTML += row;
            //End code
            console.log(childSnapshot);
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "letschatpage.html";
}

function logOut() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}