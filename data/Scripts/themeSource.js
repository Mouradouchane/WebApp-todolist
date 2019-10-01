//importing left menu elemnt for editing colors
import {leftMenu,save,trash,sitting} from "../../leftMenu.js";
import {topmenuLiveTime} from "../../topMenu.js";
import {add_botton,input_title,input_time,descirption} from "../../toDoList.js";
import {main,mainChildes} from "./elems.js";
import {LIST,WarningInfo} from "../../toDoList.js";
import {rootStyle as rt} from './themes.js';

var inp = mainChildes[3];
var tdl = document.querySelector('#ToDoList');

export const Lightsource = {

        olsResponsible : function(){
            rt.style.cssText = `
            --ols_LightBackground : #7fa287;
            --ols_title :  #fff;
            --ols_time :#81ec99;
            --ols_hr : #282828;
            --ols_descpition : #282828;
            `;

            let del = document.getElementsByClassName('delete');
            let lov = document.getElementsByClassName('isloved');
            
            if(del != undefined || del != null || del.length < 0){
            let i;
                for(i =0 ; i < del.length ; i +=1){

                    del[i].src= "./data/Graphics/svg/cancel-button.svg";
                    lov[i].src = "./data/Graphics/svg/white/White_heart-solid.svg";
                };
            }
        },

        Listmain : function(){
            LIST.style.cssText = `
                background : transparent;
            `;

            tdl.style.cssText = `
                background : var(--Light_StandarBackgroundColor);
            `;
        },

        topmain : function(){
            main.style.cssText = `
                background : var(--Light_StandarBackgroundColor);
            `;
            topmenuLiveTime.style.cssText = `
                color : var(--Light_TextColor);
            `;
            topmenuLiveTime.parentElement.style.cssText =  `
                background : var(--Light_TopMenuBackgrounColor);
            `;
        },

        leftmenu : function(){
        // left menu
        leftMenu.style.cssText = `
        border-left: 2px solid var(--Light_TopMenuBackgrounColor);
        `;
        leftMenu.querySelector('hr').style.cssText = `color:var(--Light_TextColor);`;
        save.src = "./data/Graphics/svg/download-button.svg";
        trash.src = "./data/Graphics/svg/trash-alt-solid.svg";
        sitting.src = "./data/Graphics/svg/settings.svg";
        },
    
        inputpart : function(){
        // input part 
        inp.style.cssText = `
            background : var(--Light_TopMenuBackgrounColor);
        `;
        add_botton.src = "./data/Graphics/svg/add-plus-button.svg";
        // input_title.style.cssText = "border : 1px solid var(--Light_white); color : var(--Light_white)";
        // input_time.style.cssText = "border : 1px solid var(--Light_white); color : var(--Light_white)";
        // descirption.style.cssText = "border : 1px solid var(--Light_white); color : var(--Light_white)";
        },

        Warng : function(){
            // backgnd
            WarningInfo.style.cssText = `
                background : var(--Dark_info);
            `;
            
            // p
            WarningInfo.children[1].style.cssText = `
                color : var(--Light_TextColor);
            `;
            
            // span
            WarningInfo.children[1].lastElementChild.style.cssText = `
                color : var(--info);
            `;
        }

         
};

export const Darksource = {

        olsResponsible : function(){
            rt.style.cssText = `
            --ols_LightBackground : #171717;
            --ols_title : #ff4d4d;
            --ols_time : #a1ddee;
            --ols_hr : #ff4d4d;;
            --ols_descpition : white;
            `;

            let del = document.getElementsByClassName('delete');
            let lov = document.getElementsByClassName('isloved');

            if(del != undefined || del != null || del.length < 0){
            let i;
                for(i =0 ; i < del.length ; i +=1){

                    del[i].src = "./data/Graphics/svg/white/White_Cancel.svg";
                    lov[i].src = "./data/Graphics/svg/white/White_heart-solid.svg";
                };
            }
        },
        
        Listmain : function(){
            LIST.style.cssText = `
                background : transparent;
            `;

            tdl.style.cssText = `
                background : var(--Dark_TopMenuBackgrounColor);
            `;
        },

        topmain : function(){
            main.style.cssText = `
            background : var(--Dark_TopMenuBackgrounColor);
        `;
            topmenuLiveTime.style.cssText = `
            color : var(--Dark_white);
        `;
            topmenuLiveTime.parentElement.style.cssText =  `
            background : var(--Dark_TitlesColor);
        `;

        },

        leftmenu : function(){
        // left menu
        leftMenu.style.cssText = `
        border-left: 2px solid var(--Dark_TitlesColor);       
        background : var(--Dark_TopMenuBackgrounColor);
        `;
        save.src = "./data/Graphics/svg/white/White_download-button.svg";
        trash.src = "./data/Graphics/svg/white/White_trash.svg";
        leftMenu.querySelector('hr').style.cssText = `color:var(--Dark_white);`;
        sitting.src = "./data/Graphics/svg/white/White_settings.svg";
        },

        inputpart : function(){
        // input part 
        inp.style.cssText = `
            background : var(--Dark_TitlesColor);
        `;
        add_botton.src = "./data/Graphics/svg/white/White_add-plus-button.svg";
        input_title.style.cssText = "border : 1px solid var(--Dark_TextColor); color : var(--Dark_TextColor)";
        input_time.style.cssText = "border : 1px solid var(--Dark_TextColor); color : var(--Dark_TextColor)";
        descirption.style.cssText = "border : 1px solid var(--Dark_TextColor); color : var(--Dark_TextColor)";
        },
        
        Warng : function(){
            // backgnd
            WarningInfo.style.cssText = `
                background : var(--Dark_info);
            `;
            
            // p
            WarningInfo.children[1].style.cssText = `
                color : var(--Light_TextColor);
            `;
            
            // span
            WarningInfo.children[1].lastElementChild.style.cssText = `
                color : var(--Light_MenuBackgroundColor);
            `;
        }
}

export default "Not Found in themeSource.js";