var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/merigold.jpeg') {
      myImage.setAttribute ('src','images/yenigold.png');
    } else {
      myImage.setAttribute ('src','images/merigold.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('И кто же ты сегодня, Геральт?');
    localStorage.setItem('name', myName);
    if(myName === 'Ламберт') {
        myHeading.textContent = 'Вредный хуй!';
    } else {
        myHeading.textContent = 'Скучно тебе, ' + myName + '?';
    }
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Скучно тебе, ' + storedName + '?';
}

myButton.onclick = function() {
    setUserName();
  }