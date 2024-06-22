function printErr(eleClass,message){
    document.getElementsByClassName(eleClass)[0].innerHTML = message
}
function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var data = document.getElementById('data').value;
    
    if (name == ""){
        console.log("yes")
        printErr("nameid","Please enter your name");
    }
    else if (email == "") {
        printErr("emailid","Please enter your email");
    } 
    else if (data == "Select") {
        printErr("dataid","Please enter your Country");
    }
    return false
}