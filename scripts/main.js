// var time;
// time = new Date();
// console.log(time);

// var japantime;
// japantime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo'});
// console.log(japantime);

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

var japantime;
japantime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo'});


const nowTime = document.getElementById('time_txt');
nowTime.textContent = japantime;

document.getElementById('button').onclick = function() {
  // alert('on!');
  var time;
  time = new Date();

  var japantime;
  japantime = new Date().toLocaleString({ timeZone: 'Asia/Tokyo'});


  const nowTime = document.getElementById('time_txt');
  nowTime.textContent = japantime;

};

let myButton = document.getElementById('btn_user');
let userName = document.getElementById('userName');

function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    userName.textContent = myName;
  };
};


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  userName.textContent = storedName;
};


myButton.onclick = function() {
  setUserName();
};
