  
function validate() {    

    var fname = document.reg_form.fname;    
    var lname = document.reg_form.lname;     
    var email = document.reg_form.email;    
    var github = document.reg_form.v2;    
    

    if (fname.value.length == 0) {    
        alert("Name is required");    
        fname.focus();    
        return false;    
    }    
    if (lname.value.length == 0) {    
        alert("Last Name is required");    
        lname.focus();    
        return false;    
    }        
    if (email.value.length == 0) {    
        alert("Email Id is required");    
        email.focus();    
        return false;    
    }    
    if (github.value != typeof(v2)) {    
        alert(".pdf only");    
        github.focus();    
        return false;    
    }       
    return false;    
}    


function fx(){
let x = document.getElementById("r");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  
  function fy(){
  let y = document.getElementById("gh");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
  
  function fz(){
  let z = document.getElementById("ln");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
  
  function fw(){
  let w = document.getElementById("p");
  if (w.style.display === "none") {
    w.style.display = "block";
  } else {
    w.style.display = "none";
  }
}



function myFunction() {
  let x = document.getElementById("r");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  