
import {mainChildes} from "./data/Scripts/elems.js";
import{ RegInputs as REG }from "./data/Scripts/RegEx.js";

import {Dark} from "./data/Scripts/themes.js";

export {inputsPart};
export {add_botton,input_title,input_time,descirption};
export {WarningInfo,LIST};

var list_toDo = mainChildes[2];
var inputsPart = mainChildes[3].children;
const WarningInfo = document.querySelector('#info');
const  [add_botton,input_title,input_time,descirption] = inputsPart;

const LIST = document.querySelector('#LIST');
var Likes = ["./data/Graphics/svg/heart-solid.svg","./data/Graphics/svg/heart-solid2.svg"];
var DarkLikes = ["./data/Graphics/svg/white/White_heart-solid2.svg","./data/Graphics/svg/white/White_heart-solid.svg"];

add_botton.onclick =  () => {
if(REG.test(input_title.value) == false || REG.test(descirption.value ) == false){
        WarningInfo.style.display = "block";
        WarningInfo.style.animation = "showing 2s 2";
        setTimeout(() => {
                WarningInfo.style.display = "none";    
        }, 6000);
}
else{
        // if theme light
        if(Dark.checked == true){
        // add ol 
        LIST.appendChild(document.createElement('ol')).className = "todos";
        var all_ol = document.querySelectorAll('.todos');
        // target last element
        var lol = all_ol[all_ol.length -1];
        // add delete img
        lol.appendChild(document.createElement('img')).className="delete";
        lol.lastElementChild.src='./data/Graphics/svg/cancel-button.svg';

        // add methode deleted
        lol.lastElementChild.onclick = () => {
                lol.lastElementChild.parentElement.remove();
        };
        // add title
        lol.appendChild(document.createElement('p')).className="title";
        lol.lastElementChild.textContent = input_title.value + " :";
        // add time
        if( REG.test(input_time.value) == false){
        lol.appendChild(document.createElement('p')).className="time";
        lol.lastElementChild.textContent = "UNKNOWN";
        }
        else{
        lol.appendChild(document.createElement('p')).className="time";
        lol.lastElementChild.textContent = input_time.value ;
        }
        // add Hr line
        lol.appendChild(document.createElement('hr'))
        // add description
        lol.appendChild(document.createElement('p')).className="description";
        lol.lastElementChild.textContent = descirption.value ;
        // add Love img
        lol.appendChild(document.createElement('img')).className="isloved";
        lol.lastElementChild.src='./data/Graphics/svg/heart-solid.svg';
        // add Love methode
        lol.lastElementChild.onclick = () => {
                lol.lastElementChild.src = Likes[1];
                Likes.reverse();
         }
        }
        // if theme dark
        else if(Dark.checked == false){
                        // add ol 
        LIST.appendChild(document.createElement('ol')).className = "todos";
        var all_ol = document.querySelectorAll('.todos');
        // target last element
        var lol = all_ol[all_ol.length -1];
        // add delete img
        lol.appendChild(document.createElement('img')).className="delete";
        lol.lastElementChild.src='./data/Graphics/svg/white/White_cancel.svg';
        // add methode deleted
        lol.lastElementChild.onclick = () => {
                lol.lastElementChild.parentElement.remove();
        };
        // add title
        lol.appendChild(document.createElement('p')).className="title";
        lol.lastElementChild.textContent = input_title.value + " :";
        // add time
        if( REG.test(input_time.value) == false){
        lol.appendChild(document.createElement('p')).className="time";
        lol.lastElementChild.textContent = "UNKNOWN";
        }
        else{
        lol.appendChild(document.createElement('p')).className="time";
        lol.lastElementChild.textContent = input_time.value ;
        }
        // add Hr line
        lol.appendChild(document.createElement('hr'))
        // add description
        lol.appendChild(document.createElement('p')).className="description";
        lol.lastElementChild.textContent = descirption.value ;
        // add Love img
        lol.appendChild(document.createElement('img')).className="isloved";
        lol.lastElementChild.src='./data/Graphics/svg/heart-solid.svg';
        // add Love methode
        lol.lastElementChild.onclick = () => {
        lol.lastElementChild.src = DarkLikes[1];
        Likes.reverse();
                }
        }
   }
};

// is Empty Part 

var EmptyContent = document.querySelector('#isEmpty');

setInterval(() => {
        if(LIST.children.length <= 0){
                EmptyContent.style.display  = "block";
        }
        else{
                EmptyContent.style.display = "none";
        }
} , 10);
