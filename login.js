function checkCreds(){
    console.log("checkCreds() function started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNumb = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    // alert("Hello, " + fullName);

    if(fullName.length > 20 || fullName.length < 2){
        document.getElementById("loginStatus").innerHTML = 
            "Invalid full name! Please try again...";
    } else if(badgeNumb>999 || badgeNumb<0){
        document.getElementById("loginStatus").innerHTML =
            "Invalid Badge number! Please try again...";
    }else {
        alert("Welcome, " + fullName);
        location.replace("UATSpacePage.html");
    }
}