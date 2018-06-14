const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myText = document.getElementById('myText');
const Reset = document.getElementById('reset');


//let getRandomNumber = () => number = Math.floor(Math.random() * 260 );

//const color = 'rgb(' +  Math.floor(Math.random() * 260 ) + ',' + Math.floor(Math.random() * 260 ) + ',' +  Math.floor(Math.random() * 260 ) + ')';

myButton.addEventListener('click', () => {
  myHeading.style.color = myText.value;
  myHeading.style.backgroundColor ='rgb(' +  Math.floor(Math.random() * 260 ) + ',' + Math.floor(Math.random() * 260 ) + ',' +  Math.floor(Math.random() * 260 ) + ')';
});

Reset.addEventListener('click', () => {
  myHeading.style.color = '#000';
  myHeading.style.backgroundColor = 'white';                       
});