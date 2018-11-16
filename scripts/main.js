var myImage = document.querySelector('img');

myImage.onclick = function() {
	/*myImage.setAttribute('src','https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&h=350');*/
	var imageSource = myImage.getAttribute('src');
	if(imageSource==='images/image1.jpg'){	

myImage.setAttribute('src','images/image2.jpeg');
}else 
         {
	   myImage.setAttribute('src','images/image1.jpg');
}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName;
	myName = prompt('Please enter your name');
	localStorage.setItem('name', myName)
	myHeading.textContent = 'Mozilla is cool!' +" , "+ myName;
}

if(!localStorage.getItem('name')){setUserName();}
else{
	var storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla is cool!' +" , "+ storedName;}
myButton.onclick = function(){setUserName();}