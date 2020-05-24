(function () {
  var form = document.getElementById("login");

  //add confirmation that pswd & confirm pswd are the same

  addEvent(form, "submit", function (e) {
    e.preventDefault();
    var elements = this.elements;
    var username = elements.username.value;
    var msg = "Welcome" + username;
    document.getElementById("main").textContent = msg;
  });
});
(function () {
  var form = document.getElementById("signup");

  //add confirmation that pswd & confirm pswd are the same

  addEvent(form, "submit", function (e) {
    e.preventDefault();
    var elements = this.elements;
    var username = elements.username.value;
    var msg = "Thanks for signing up " + username;
    document.getElementById("main").textContent = msg;
  });
});

// Create a "close" button and append it to each list item
var myNodelist = document.getElementById("myLI");
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
var list = document.querySelector("myUL");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.idName === "myLI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
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

//needs to be written
function joinGroup() {}

//need to fill tables on leaderboards with db info
