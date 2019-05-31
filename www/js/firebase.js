var config = {
    apiKey: "AIzaSyDElNdl-JsveC98UpxEs1ciBn13ghKLuvE",
    authDomain: "ihud-b480e.firebaseapp.com",
    databaseURL: "https://ihud-b480e.firebaseio.com",
    projectId: "ihud-b480e",
    storageBucket: "ihud-b480e.appspot.com",
    messagingSenderId: "695439756321"
  };
  firebase.initializeApp(config);

var messagesRef = firebase.database().ref('settings');

// Listen for form submit
document.getElementById('settingsForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var color = getInputVal('color');
  var rng1 = getInputVal('rng1');
  var rng2 = getInputVal('rng2');
  var limit = getInputVal('limit');
  

  // Save message
  saveMessage(color, rng1, rng2, limit);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('settingsForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(color, rng1, rng2, limit){

  var database = firebase.database(); 
var userid = 1;
firebase.database().ref('User Settings').update({
color: color,
    rng1:rng1,
    rng2:rng2,
    limit:limit,
    Id: userid
});

 // var newMessageRef = messagesRef.update();
 // newMessageRef.set({
    
  
//  });
}