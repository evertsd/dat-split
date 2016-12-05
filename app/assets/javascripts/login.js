var added = false;
function changeOpacity(){
		login = document.getElementById('hidden-login');
		if(login.style.opacity > 0)
			login.style.opacity = 0;
		else{
			login.style.opacity = 1.0;
			hideElement('login-tooltip');
		}
}

function showElement(id){
	element = document.getElementById(id);
	if(element.style.opacity == 0 && shouldShowTooltip(id))
		element.style.opacity = 0.9;
}

function hideElement(id){
	document.getElementById(id).style.opacity = 0;
}

function shouldShowTooltip(id){
	return document.getElementById('hidden-login').style.opacity == 0.0;
}

function logStuff(){
	console.log("SHIT");
}