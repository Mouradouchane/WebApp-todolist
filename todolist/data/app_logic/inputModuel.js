import {fullInput,input,btnSendValue} from "./varsModuel.js";
import {SaveList,REG} from "./varsModuel.js";
import  {constructorToDo} from "./constructor.js";
import {fullList , EmptyGhost} from "./varsModuel.js";

let nm = 0;
    
btnSendValue.onclick = function(){
   
    if(REG.test(input.value) == true || input.value == ""){
        console.warn("Empty text");
    }
    else if(REG.test(input.value) == false){

        SaveList.push(new constructorToDo(input.value,nm).printInList());
        nm+=1;
    }

}