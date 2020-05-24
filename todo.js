firebase.initializeApp({
  apiKey: "AIzaSyC75j4Bb_GOZXa6cfwkN8p0IYfgIg1hVgo",
  authDomain: "tasklist-12.firebaseapp.com",
  projectId: "tasklist-12",
});

//Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

const form = document.querySelector("#info");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("tasks").add({
    myInput: form.myInput.value,
    myValue: form.myValue.value,
  });
  form.tit.value = "";
  form.txt.value = "";
});

var tab = document.getElementById("tabla");
firebase
  .firestore()
  .collection("tasks")
  .orderBy("myInput")
  .onSnapshot((querySnapshot) => {
    tabla.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().myInput}`);
      tabla.innerHTML += `
        <tr>
      <th scope="row">${doc.data().myInput}</th>
      <td>${doc.data().myValue}</td>
      <td><button onclick="upd('${doc.id}', '${doc.data().myInput}', '${
        doc.data().myValue
      }')">Update</button></td>
      <td><button onclick="del('${doc.id}')">Delete</button></td>
    </tr>
        `;
    });
  });

async function del(id) {
  var opcion = confirm("Do you want to delete this task?");
  if (opcion == true) {
    try {
      await db
        .collection("tasks")
        .doc(id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    } catch (e) {
      error(e);
    }
  }
}

function upd(id, txt, number) {
  document.getElementById("myInput").value = txt;
  document.getElementById("myValue").value = number;
  var but = document.getElementById("but");
  but.innerHTML = "Update task";

  but.onclick = async function () {
    var gen = db.collection("tasks").doc(id);
    var txt = document.getElementById("myInput").value;
    var number = document.getElementById("myValue").value;
    return await gen
      .update({
        myInput: txt,
        myValue: number,
      })
      .then(async function () {
        await db.collection("tasks").doc(id).delete();
        console.log("Document successfully updated!");
        but.innerHTML = "Save task";
        document.getElementById("myInput").value = "";
        document.getElementById("myValue").value = "";
      })
      .catch(function (error) {
        console.error("Error updating document: ", error);
      });
  };
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var dataValue = document.getElementById("myValue").value;
  var t = document.createTextNode(inputValue + " " + dataValue);
  li.appendChild(t);
  if (inputValue === "") {
    () => {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    };
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
