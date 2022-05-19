const password = "B7T9D";

function passcheck() {
    if(document.getElementById('pass1').value != password) {
        alert("Password does not match, try again...");
        return false;
    }
}