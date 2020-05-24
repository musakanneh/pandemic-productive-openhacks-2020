(function () {
  var form = document.getElementById("inviteEmail");
  //doesn't work...needs review
  addEvent(form, "submit", function (e) {
    e.preventDefault();
    var elements = this.elements;
    var email = this.elements.value.email;
    var subject = "You are invited!";
    var body =
      "You have been invited to join a Pandemic Productive group called" +
      name +
      " Follow the link to create an account and join: tasklist-12.web.app";
    window.open("mailto:email?subject=subect&body=body");
  });
});
