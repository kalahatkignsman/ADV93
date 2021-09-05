
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAHXfsxzn5rN2OcJjiHHjQ3MzPlRjH4ppY",
      authDomain: "kwitter-6468d.firebaseapp.com",
      databaseURL: "https://kwitter-6468d-default-rtdb.firebaseio.com",
      projectId: "kwitter-6468d",
      storageBucket: "kwitter-6468d.appspot.com",
      messagingSenderId: "798319622690",
      appId: "1:798319622690:web:2865185db8134c03d5287b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
