
import {mainChildes} from "./data/Scripts/elems.js";


var date = new Date();
var StringDate = date.toDateString();

// Extract Childes in varibles
var [,topmenu,,] = mainChildes;

var topmenuDate = topmenu.children[0];
var topmenuLiveTime = topmenu.children[1];

export {topmenuDate , topmenuLiveTime};

setInterval(() => {
    var SplitDate = Date().toString().split(' ');
    var SplitTime = SplitDate[4].split(':');
    
    topmenuDate.textContent = StringDate;
    topmenuLiveTime.textContent = `${SplitTime[0]}: ${SplitTime[1]}`; 

},1000);

const onlineCircle = topmenu.children[2];

function isOnline(){
    if(window.navigator.onLine === true){
        onlineCircle.style.background = "var(--isOnline)";
    }
    else{
        onlineCircle.style.background = "var(--isOffline)";
    }
};

// checke if user is a online or not
setInterval(isOnline,2000);
