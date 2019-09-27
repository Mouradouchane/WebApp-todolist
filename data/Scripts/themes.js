// importing top menu element for editing colors 
import {topmenuLiveTime} from "../../topMenu.js";

//importing left menu elemnt for editing colors
import {leftMenu,save,trash,sitting} from "../../leftMenu.js";

//importing input part for editing colors
import {inputsPart} from "../../toDoList.js";
import {add_botton,input_title,input_time,descirption} from "../../toDoList.js";

const Full_Sitting = document.querySelectorAll('.fillChoise');
var [lightChoise,darkChoise] = Full_Sitting;

// light toogle checked 
const Light = lightChoise.children[1].children[0].children[0];
// dark toogle cheked
const Dark  = darkChoise.children[1].children[0].children[0];

// root or html has all css varibles "colors"
var rootStyle = document.documentElement;

function EnableLight(){
    //light ON
    if(Light.checked == true){

        // dark off
        Dark.checked = false;
    }
    //light OFF
    else if(Light.checked == false){

        // Dark on
        Dark.checked = true;
    }
    
};

function EnableDark(){

     //dark ON
    if(Dark.checked == true){

        Light.checked = false;
    }
    //dark OFF
    else if(Dark.checked == false){

        // light on
        Light.checked = true;
}
}

// this is toggles targetes
lightChoise.children[1].children[0].children[0].onclick = () => {
        EnableLight();
};

darkChoise.children[1].children[0].children[0].onclick = () => {
        EnableDark();
};


var backup = {

    // rootStyle.style.cssText = `
    // --Light_MenuBackgroundColor : #534c4c;
    // --Light_TopMenuBackgrounColor : #282828;
    // --Light_StandarBackgroundColor : #534c4c;  
    // --Light_InputBackgroundColor : #282828; 
    // --Light_TextColor : rgb(41, 29, 32);  
    // --Light_TitlesColor : #ff4d4d; 
    // --Light_olsColor : #b9c6c5;
    // --Light_white : white;
    // `;
    
    // // top menu
    // topmenuLiveTime.style.color = "var(--Dark_white)";
    
    // // left menu
    // leftMenu.style.cssText = "border-left: 2px solid var(--Dark_TitlesColor )";
    // save.src = "./data/Graphics/svg/white/White_download-button.svg";
    // trash.src = "./data/Graphics/svg/white/White_trash.svg";
    // sitting.src = "./data/Graphics/svg/white/White_settings.svg";

    // // input part 
    // add_botton.src = "./data/Graphics/svg/white/White_add-plus-button.svg";
    // input_title.style.cssText = "border : 1px solid white;color : white";
    // input_time.style.cssText = "border : 1px solid white;color : white";
    // descirption.style.cssText = "border : 1px solid white;color : white";
    // inputsPart.style.cssText = "background : #282828";
}