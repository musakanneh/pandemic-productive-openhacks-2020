(function() {
    var form = document.getElementById('login');

    //add confirmation that pswd & confirm pswd are the same
    
    addEvent(form, 'submit', function(e) {
        e.preventDefault();
        var elements = this.elements;
        var username = elements.username.value;
        var msg = 'Welcome' + username;
        document.getElementById('main').textContent = msg;
    });
});
(function() {
    var form = document.getElementById('signup');

    //add confirmation that pswd & confirm pswd are the same

    addEvent(form, 'submit', function(e) {
        e.preventDefault();
        var elements = this.elements;
        var username = elements.username.value;
        var msg = 'Thanks for signing up '+username;
        document.getElementById('main').textContent = msg;
    });
});