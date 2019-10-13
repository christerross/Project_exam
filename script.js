function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");
    
    error.style.padding = "10px";
    
    if(name.length <5){
        text = "Please Enter Valid Name";
        error.innerHTML = text;
        return false;
    }
    
     if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email Address";
        error.innerHTML = text;
        return false;
    }
    
    if(message.length <= 50){
        text = "Please Enter More Than 50 Characters";
        error.innerHTML = text;
        return false;
    }
    alert("Thank You For Your Message!")
    return true;
    
}

function onClickMenu(){
    
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("hamnav").classList.toggle("change");
}


function getJSON(url){
    var Httpreg = new XMLHttpRequest();
    Httpreg.open("GET",'http://api.open-notify.org/astros.json',false);
    Httpreg.send(null);
    return Httpreg.responseText;
    
}

var myObj = getJSON('http://api.open-notify.org/astros.json');
var jsonObj = JSON.parse(myObj);

console.log("Number of people: " + jsonObj.number);

document.getElementById('peoplebox').innerHTML = jsonObj.number;






