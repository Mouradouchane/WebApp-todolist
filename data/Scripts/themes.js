// importing top menu element for editing colors 
import {topmenuLiveTime} from "../../topMenu.js";

//importing left menu elemnt for editing colors
import {leftMenu,save,trash,sitting} from "../../leftMenu.js";

//importing input part for editing colors
import {inputsPart} from "../../toDoList.js";
import {add_botton,input_title,input_time,descirption} from "../../toDoList.js";

// importing Dark & light values from " source "
import {Darksource,Lightsource} from "./themeSource.js";

const Full_Sitting = document.querySelectorAll('.fillChoise');
var darkChoise = Full_Sitting[0];

// toggle between themes 
const Dark  = darkChoise.children[1].children[0].children[0];
export {Dark};

// root or html has all css varibles "colors"
var rootStyle = document.documentElement;
export {rootStyle} ;

// light theme function
function EnableLight(){
        Lightsource.Listmain();
        Lightsource.topmain();
        Lightsource.leftmenu();
        Lightsource.inputpart();
        Lightsource.Warng();
        Lightsource.olsResponsible();
};

// dark theme function 
function EnableDark(){
        Darksource.Listmain();
        Darksource.topmain();
        Darksource.leftmenu();
        Darksource.inputpart();
        Darksource.Warng();
        Darksource.olsResponsible();
};

// this Array Has Dark & Light Theme "Functions"
const themes = [EnableDark,EnableLight];

Dark.onclick = () => {
        themes[0]();
        themes.reverse();
};
