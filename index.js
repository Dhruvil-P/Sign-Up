function validation(){
    var Firstname = document.getElementById("Fname").value;
    var Lastname = document.getElementById("Lname").value;
    var E_mail = document.getElementById("Email").value;
    var Password = document.getElementById("Pass").value;

    var Error1= document.getElementById("Error1")
    var Img1 = document.getElementById("Img1")
    var Error1_1= document.getElementById("Error1_1")

    var Error2 = document.getElementById("Error2")
    var Img2 = document.getElementById("Img2")
    var Error2_1= document.getElementById("Error2_1")

    var Error3 = document.getElementById("Error3")
    var Img3 = document.getElementById("Img3")
    var Error4 = document.getElementById("Error3")

    var Error5 = document.getElementById("Error5")
    var Img4 = document.getElementById("Img4")

    var Pattern = /^[^ ]+@[^ ]+[a-z]{2,3}$/;

    //////////////////////////////////////////////////////////
    if (Firstname.type == Number)
    {
        Error1_1.style.visibility = "visible"
        Img1.style.visibility = "visible"
    }
    else{
        Error1_1.style.visibility = "hidden"
        Img1.style.visibility = "hidden"
    }

    if (Firstname == "")
    {
        Error1.style.visibility = "visible"
        Img1.style.visibility = "visible"
    }
    else{
        Error1.style.visibility = "hidden"
        Img1.style.visibility = "hidden"
    }

    ///////////////////////////////////////////////////////////
    if (Lastname.type == Number)
    {
        Error2_1.style.visibility = "visible"
        Img2.style.visibility = "visible"
    }
    else{
        Error2_1.style.visibility = "hidden"
        Img2.style.visibility = "hidden"
    }

    if (Lastname == "")
    {
        Error2.style.visibility = "visible"
        Img2.style.visibility = "visible"
    }
    else{
        Error2.style.visibility = "hidden"
        Img2.style.visibility = "hidden"
    }
    
//////////////////////////////////////////////////////////////////
    if (E_mail == "")
    {
        Error3.style.visibility = "visible"
        Img3.style.visibility = "visible"
    }

    if (E_mail.match(Pattern))
    {
        Error4.style.visibility = "hidden"
        Img3.style.visibility = "hidden"
    }
    else{
        Error4.style.visibility = "visible"
        Img3.style.visibility = "visible"
    }

    //////////////////////////////////////////////////////////////
    if (Password == "")
    {
        Error5.style.visibility = "visible"
        Img4.style.visibility = "visible"
    } 
    
    if (Password.length < 8)
    {
        Error5.style.visibility = "visible"
        Img5.style.visibility = "visible"
    }
    else{
        Error5.style.visibility = "hidden"
        Img5.style.visibility = "hidden"
    }
}

function Show() {
    var x = document.getElementById("Pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } 