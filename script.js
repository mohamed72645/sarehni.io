
// استخراج الـ id من الرابط
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
//var id = "jAoCxBTgmjexhbXVaBPEJKyKsSG3";
//var currentPageUrl = window.location.href;
//var urlParts = currentPageUrl.split('/');
//var id = urlParts[urlParts.length - 1];
// إعداد تكوين Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC4rkjDD-ZYPrvMxP9X3USPgJhpkFVCr-A",
  authDomain: "sareh-42d29.firebaseapp.com",
  databaseURL: "https://sareh-42d29-default-rtdb.firebaseio.com",
  projectId: "sareh-42d29",
  storageBucket: "sareh-42d29.appspot.com",
  messagingSenderId: "1060953822870",
  appId: "1:1060953822870:web:355a7cc27c87e1153914b7",
  measurementId: "G-94R508S4C4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function() {
 // var id = window.location.search.substring(4);
  var textInput = document.getElementById("text-input").value;
  
//  var now = new Date();
  

var now = new Date();

var hours = now.getHours();
var minutes = now.getMinutes();

// تحويل الساعة إلى نظام 12 ساعة
var amOrPm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12;


  firebase.database().ref('messages/msg/' + id + '/msg/').push({
    d: now.getDate(),
    mo: now.getMonth() + 1,
    y: now.getFullYear(),
    h: hours,
    mi: minutes,
    ampm: amOrPm,
    msg: textInput,
  });
});
