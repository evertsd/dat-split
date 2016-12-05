function registered()
{
	var header = document.getElementById("signup");

	if(header.innerHTML == "S1GNUP")
	{
		header.innerHTML="LOG1N";
		document.getElementById("login").value="split";
		document.getElementById("already").innerHTML="Register?";
	}
	else
	{
		header.innerHTML="S1GNUP";
		document.getElementById("login").value="start";
		document.getElementById("already").innerHTML="ALREADY TIMING?";
	}
}