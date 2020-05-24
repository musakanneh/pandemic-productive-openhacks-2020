// validate that there is a name submitted
if (document.getElementByName(groupcreatename) == "") {
  alert("It does not appear you entered a name.");
} else {
  //create subpage formatted like students.html, except named whatever the name is
  var fs = require("fs");

  var htmlContent = "<html><body><h1>hi</h1></body></html>";
  var extension =
    "/" + document.getElementByName(groupcreatename).strip(" ") + ".html";

  fs.writeFile(extension, htmlContent, (error) => {
    alert(
      "There was an error creating your group. Please try again and check you entered a valid name."
    );
  });

  //send them to that page
  document.location.href = extension;

  //automatically add creator to that group - need db stuff for this
}
