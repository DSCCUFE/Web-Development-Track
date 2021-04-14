var form = document.getElementsByTagName('form')[0];
var data = [
    {
        username: "omar",
        password: 12345
    },
    {
        username: "mohamed",
        password: 101112
    },
    {
        username: "saed",
        password: 123456
    }
];

form.onsubmit = function () {
    var username = document.getElementsByName('username')[0];
    var password = document.getElementsByName('password')[0];
    for (var i = 0; i < data.length; i++) {
        if (username.value == data[i]["username"] && password.value == data[i]["password"]) {
            alert("successful sign in");
            return true;
        }
    }
    alert("Wrong username or password");
    return false;
};