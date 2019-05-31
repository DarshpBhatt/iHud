function forPingTimer(){
 var lock =  window.navigator.requestWakeLock('screen');
 //set timeout or until the timer expires
}

function colorfn() {
  var x = localStorage.getItem("displayColor");

var nrstGas =  localStorage.getItem("1stGas");
document.getElementById("nrstGas").innerHTML = nrstGas;
console.log(nrstGas);

  document.body.style.color = x;
}

 //test speed
//function that processes on load
function speed(){
//get user lat and long
function dgstoradians(dgs){

    return dgs * Math.PI / 180;
}


   

//var myVar = setInterval(currPosition,6000);
var latAr = [];
var longAr = [];
var i=0;
var y=1;
function onSuccess(position){
       // alert('Latitude: '          + position.coords.latitude          + '\n' +
           //   'Longitude: '         + position.coords.longitude         + '\n' +
             // 'Altitude: '          + position.coords.altitude          + '\n' +
             // 'Accuracy: '          + position.coords.accuracy          + '\n' +
              //'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              //'Heading: '           + position.coords.heading           + '\n' +
            //  'Speed: '             + position.coords.speed             + '\n' +
            //  'Timestamp: '         + position.timestamp                + '\n');
       //document.getElementById("latitude").innerHTML = position.coords.latitude;
      //document.getElementById("longitude").innerHTML = position.coords.longitude;
 latAr.push(position.coords.latitude);
longAr.push(position.coords.longitude);


   }
   function currPosition(position){
  
   	

   //find distance travelled every 1 seconds
latAr.push(position.coords.latitude);
longAr.push(position.coords.longitude);

    //prior position
var lat1 = latAr[i];
var long1 = longAr[i];
//post position of 5 seconds
var lat2 = latAr[y];
var long2 = longAr[y];
var earthRadius = 6371;

  var dLat = dgstoradians(lat2-lat1);
  var dLon = dgstoradians(long2-long1);

lat1 = dgstoradians(lat1);
lat2 = dgstoradians(lat2);

var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  
  var kmtom = (earthRadius * c) * 1000;

var select = document.getElementById("speedUnit");
var unitSelected = select.options[select.selectedIndex].value;

if(unitSelected == "1")
{
	var kmph = ((kmtom * 3.6).toFixed(0));
	document.getElementById("speed").innerHTML = kmph +  "<br>";
    document.getElementById("unit").innerHTML = "km/h";

    //needs updating
    var avgspeed = kmph/i;
    document.getElementById("avg1").innerHTML = avgspeed;

var c = localStorage.getItem("limit");
localStorage.setItem("limit", c);

    if(kmph > c){
    document.getElementById('speed').style.color = "red";
  }

  var low = localStorage.getItem("rng1");
  var hig = localStorage.getItem("rng2");

  if(kmph > low && kmph < hig){
    document.getElementById('speed').style.color = "green";
  }

}
if(unitSelected == "2")
{
	var mph = ((kmtom * 2.237).toFixed(0));
	document.getElementById("speed").innerHTML = mph +  "<br>";
    document.getElementById("unit").innerHTML = "m/h";
    var avgspeed = mph/i;
    document.getElementById("avg1").innerHTML = avgspeed;
     
     var c = localStorage.getItem("limit");

    if(kmph > c){
    document.getElementById('speed').style.color = "red";
  }

  var low = localStorage.getItem("rng1");
  var hig = localStorage.getItem("rng2");

  localStorage.setItem("rng1", low);
localStorage.setItem("rng2", hig);

  if(kmph > low && kmph < hig){
    document.getElementById('speed').style.color = "green";
  }
}

//
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("currTime").innerHTML = time;


i++;
y++;
}//end of currposition
setInterval(function(){ navigator.geolocation.getCurrentPosition(currPosition); }, 1000);
 navigator.geolocation.getCurrentPosition(onSuccess);


}//end of load func

function toRad(Value) {
    /** Converts numeric degrees to radians */
    return Value * Math.PI / 180;
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

function sendData(){

//get text box values
var userid = 9;
var val = Math.floor(10103 + Math.random() * 10293);
var name = document.getElementById("usrname").value;
var email = document.getElementById("usremail").value;
var reportMessage = document.getElementById("textArea").value;
//temp unique id
console.log(val);


//connect to the firebase
var config = {
     apiKey: "AIzaSyDElNdl-JsveC98UpxEs1ciBn13ghKLuvE",
    authDomain: "ihud-b480e.firebaseapp.com",
    databaseURL: "https://ihud-b480e.firebaseio.com",
    projectId: "ihud-b480e",
    storageBucket: "ihud-b480e.appspot.com",
    messagingSenderId: "695439756321"
  };
  firebase.initializeApp(config);

//send data to the firebase
var database = firebase.database();
var memberRef = database.ref('User FeedBack/Id: ' + val);



firebase.database().ref('User FeedBacks/'  +'Report id:'+val).update({
Name: name,
Email: email,
Description: reportMessage
});




alert ('Your Reort Id is: '+val);
}

function loadfunc2(){
var config = {
     apiKey: "AIzaSyDElNdl-JsveC98UpxEs1ciBn13ghKLuvE",
    authDomain: "ihud-b480e.firebaseapp.com",
    databaseURL: "https://ihud-b480e.firebaseio.com",
    projectId: "ihud-b480e",
    storageBucket: "ihud-b480e.appspot.com",
    messagingSenderId: "695439756321"
  };
  firebase.initializeApp(config);

//send data to the firebase
var database = firebase.database();
var memberRef = database.ref('User Settings');

//pull data
memberRef.on('value', function(snapshot){
//console.log(snapshot.val);
});

memberRef.on('child_added', function(snapshot){

//console.log(snapshot.val());
var myJson = JSON.stringify(snapshot.val());
//console.log(myJson);
var obj = JSON.parse(myJson); 
console.log(obj.color);
if(obj.Id == '1'){
console.log(obj.color);//document.write("Description: "+obj.limit+ "</br>");
//document.write("Start Location: " +obj.rng1);
//document.write("Start Location: " +obj.rng2);
}
});


}

function apply(){
var e = document.getElementById("color");
var f = e[e.selectedIndex].value;

//rng 1 and 2
var eco1 = document.getElementById("rng1").value;
var eco2 = document.getElementById("rng2").value;

//get max speed
var maxSpeed = document.getElementById("limit").value;

console.log(maxSpeed);

//send values to storage
localStorage.setItem("displayColor", f);
localStorage.setItem("rng1", eco1);
localStorage.setItem("rng2", eco2);
localStorage.setItem("limit", maxSpeed);



}
function load(){

if(localStorage.getItem("limit") == ""){
//do nothing
//do not pull data


}else{
//if not empty, pull data
console.log(localStorage.getItem("displayColor"));
console.log(localStorage.getItem("rng1"));
console.log(localStorage.getItem("rng2"));
console.log(localStorage.getItem("limit"));

var e = document.getElementById("color");
e[e.selectedIndex].text = localStorage.getItem("displayColor");

document.getElementById("rng1").value = localStorage.getItem("rng1");
document.getElementById("rng2").value = localStorage.getItem("rng2");


document.getElementById("limit").value = localStorage.getItem("limit");


}


}