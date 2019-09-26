// importing top menu element for editing colors 
import {topmenuLiveTime} from "../../topMenu.js";

//importing left menu elemnt for editing colors
import {leftMenu,save,trash,sitting} from "../../leftMenu.js";

//importing input part for editing colors
import {inputsPart} from "../../toDoList.js";
import {add_botton,input_title,input_time,descirption} from "../../toDoList.js";

const Full_Sitting = document.querySelectorAll('.fillChoise');
var [lightChoise,darkChoise] = Full_Sitting;

// root or html has all css varibles "colors"
var rootStyle = document.documentElement;


function EnableLight(){
    //light ON
    if( lightChoise.children[1].children[0].children[0].checked == true){
        
        darkChoise.children[1].children[0].children[0].checked = false;
        rootStyle.style.cssText = `
        --Light_MenuBackgroundColor : #534c4c;
        --Light_TopMenuBackgrounColor : #282828;
        --Light_StandarBackgroundColor : #534c4c;  
        --Light_InputBackgroundColor : #282828; 
        --Light_TextColor : rgb(41, 29, 32);  
        --Light_TitlesColor : #ff4d4d; 
        --Light_olsColor : #b9c6c5;
        --Light_white : white;
        `;
        
        // top menu
        topmenuLiveTime.style.color = "var(--Dark_white)";
        
        // left menu
        leftMenu.style.cssText = "border-left: 2px solid var(--Dark_TitlesColor )";
        save.src = "./data/Graphics/svg/white/White_download-button.svg";
        trash.src = "./data/Graphics/svg/white/White_trash.svg";
        sitting.src = "./data/Graphics/svg/white/White_settings.svg";

        // input part 
        add_botton.src = "./data/Graphics/svg/white/White_add-plus-button.svg";
        input_title.style.cssText = "border : 1px solid white;color : white";
        input_time.style.cssText = "border : 1px solid white;color : white";
        descirption.style.cssText = "border : 1px solid white;color : white";
        inputsPart.style.cssText = "background : #282828";
    }

//================================================
//================================================

    // light OFF
    else if(lightChoise.children[1].children[0].children[0].checked == false){
        darkChoise.children[1].children[0].children[0].checked = true;

        rootStyle.style.cssText = `
        --Light_MenuBackgroundColor : rgba(242, 174, 174, 1);
        --Light_TopMenuBackgrounColor : #73bf84;
        --Light_StandarBackgroundColor :rgba(242, 242, 242, 1);  
        --Light_InputBackgroundColor : #282828; 
        --Light_TextColor : rgb(41, 29, 32);  
        --Light_TitlesColor : rgb(210, 245, 145); 
        --Light_olsColor : #b9c6c5;
        --Light_white : white;
        --isOnline : rgb(100, 255, 100);
        --isOffline : rgb(46, 27, 27);
        --info : rgb(72, 157, 255);
        --Light_VoidText : #999; 
        `;

        topmenuLiveTime.style.color = "var(--Light_TextColor)";

        leftMenu.style.cssText = "border-left: 2px solid var(--Light_InputBackgroundColor)";
        save.src = "./data/Graphics/svg/download-button.svg";
        trash.src = "./data/Graphics/svg/trash-alt-solid.svg";
        sitting.src = "./data/Graphics/svg/settings.svg";

        // input part
        add_botton.src = "./data/Graphics/svg/add-plus-button.svg";
        input_title.style.cssText = "border : 1px solid black;color : black";
        input_time.style.cssText = "border : 1px solid black;color : black";
        descirption.style.cssText = "border : 1px solid black;color : black";
        inputsPart.style.cssText = "background : #282828";
    }
};







function EnableDark(){

     // dark ON
    if( darkChoise.children[1].children[0].children[0].checked == true){
        lightChoise.children[1].children[0].children[0].checked = false;

        rootStyle.style.cssText = `
        --Light_MenuBackgroundColor : rgba(242, 174, 174, 1);
        --Light_TopMenuBackgrounColor : #73bf84;
        --Light_StandarBackgroundColor :rgba(242, 242, 242, 1);  
        --Light_InputBackgroundColor : #e6b8de; 
        --Light_TextColor : rgb(41, 29, 32);  
        --Light_TitlesColor : rgb(210, 245, 145); 
        --Light_olsColor : #b9c6c5;
        --Light_white : white;
        --isOnline : rgb(100, 255, 100);
        --isOffline : rgb(46, 27, 27);
        --info : rgb(72, 157, 255);
        --Light_VoidText : #999; 
        `;

        topmenuLiveTime.style.color = "var(--Light_TextColor)";

        leftMenu.style.cssText = "border-left: 2px solid var(--Light_InputBackgroundColor)";
        save.src = "./data/Graphics/svg/download-button.svg";
        trash.src = "./data/Graphics/svg/trash-alt-solid.svg";
        sitting.src = "./data/Graphics/svg/settings.svg";

        add_botton.src = "./data/Graphics/svg/add-plus-button.svg";
        input_title.style.cssText = "border : 1px solid black;color : black";
        input_time.style.cssText = "border : 1px solid black;color : black";
        descirption.style.cssText = "border : 1px solid black;color : black";
    }


//=======================================
//=======================================

    // dark OFF
    else if(darkChoise.children[1].children[0].children[0].checked == false){
        lightChoise.children[1].children[0].children[0].checked = true;

        rootStyle.style.cssText = `
        --Light_MenuBackgroundColor : #534c4c;
        --Light_TopMenuBackgrounColor : #282828;
        --Light_StandarBackgroundColor : #534c4c;  
        --Light_InputBackgroundColor : #64ff64; 
        --Light_TextColor : rgb(41, 29, 32);  
        --Light_TitlesColor : #ff4d4d; 
        --Light_olsColor : #b9c6c5;
        --Light_white : white;
        `;

        topmenuLiveTime.style.color = "var(--Dark_white)";

        leftMenu.style.cssText = "border-left: 2px solid var(--Dark_TitlesColor)";
        save.src = "./data/Graphics/svg/white/White_download-button.svg";
        trash.src = "./data/Graphics/svg/white/White_trash.svg";
        sitting.src = "./data/Graphics/svg/white/White_settings.svg";

        add_botton.src = "./data/Graphics/svg/white/White_add-plus-button.svg";
        input_title.style.cssText = "border : 1px solid white;color : white";
        input_time.style.cssText = "border : 1px solid white;color : white";
        descirption.style.cssText = "border : 1px solid white;color : white";
    }

}

// this is toggles targetes
lightChoise.children[1].children[0].children[0].onclick = () => {
        EnableLight();
};

darkChoise.children[1].children[0].children[0].onclick = () => {
        EnableDark();
};
