document.getElementById('show').style.display = "none"
function myFunction() {
      var x = document.forms["myForm"]["fname"].value;
      var y = document.forms["myForm"]["lname"].value;
      var z = document.forms["myForm"]["email"].value;
      var a = document.forms["myForm"]["address"].value;
    if (x == "" || y=="" || z==""|| a=="" ) {
        alert("Name must be filled out");
        return false;
    }else{
        document.getElementById("FirstName").innerHTML = x;
        document.getElementById("LastName").innerHTML = y;
        document.getElementById("Email").innerHTML = z;
        document.getElementById("Address").innerHTML=a;
        document.getElementById('show').style.display = "block"
        document.getElementById("form").style.display = "none"

    }
}
