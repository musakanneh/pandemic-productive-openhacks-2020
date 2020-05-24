firebase.initializeApp({
  apiKey: "AIzaSyC75j4Bb_GOZXa6cfwkN8p0IYfgIg1hVgo",
  authDomain: "tasklist-12.firebaseapp.com",
  projectId: "tasklist-12",
});

//Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

function save() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, pass)
    .then(function () {
      alert("You have registered!");
      window.location.href = "index.html";
    })

    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      window.location.href = "signup.html";
    });
}

function signin() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then(function () {
      alert("Welcome!", email);
      window.location.href = "todo.html";
      /*Here we need to change the Sign in To Log out */
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      alert(errorMessage);
    });
}
