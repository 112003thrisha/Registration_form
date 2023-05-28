function validateFirstName(){
	var first=document.getElementById("firstname").value;
	var reg1=/^[a-zA-Z\s\'\-]{2,15}$/;
	if(reg1.test(first)){
		document.getElementById("message1").style.color="lightgreen";
		document.getElementById("message1").innerHTML="<strong>valid</strong>";
	}else{
		document.getElementById("message1").style.color="red";
		document.getElementById("message1").innerHTML="<strong>Enter 2-15 characters</strong>";
      }
}
function validateLastName(){
	var last=document.getElementById("Lastname").value;
	var reg2=/^[a-zA-Z\s\'\-]{1,15}$/;
	if(reg2.test(last)){
		document.getElementById("message2").style.color="lightgreen";
		document.getElementById("message2").innerHTML="<strong>valid</strong>";
	}else{
		document.getElementById("message2").style.color="red";
		document.getElementById("message2").innerHTML="<strong>Enter 2-15 characters</strong>";
      }
}


function validatephone(){
	var Pnum=document.getElementById("phone").value;
	var reg3=/^\d{3}-\d{3}-\d{4}$/;
	if(reg3.test(Pnum)){
		document.getElementById("message3").style.color="lightgreen";
		document.getElementById("message3").innerHTML="<strong>valid</strong>";
	}else{
		document.getElementById("message3").style.color="red";
		document.getElementById("message3").innerHTML="<strong>Use xxx-xxx-xxxx format</strong>";
      }
}
function validateEmail(){
	var emailid=document.getElementById("email").value;
    var regix5=/^([a-zA-Z0-9/.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
	if(regix5.test(emailid)){
		document.getElementById("message6").style.color="lightgreen";
		document.getElementById("message6").innerHTML="<strong>valid</strong>";
	}else{
		document.getElementById("message6").style.color="red";
		document.getElementById("message6").innerHTML="<strong>Invalid</strong>";
      }
}