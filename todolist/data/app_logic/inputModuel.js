import {fullInput,input,btnSendValue} from "./varsModuel.js";
import {REG} from "./varsModuel.js";
import  {constructorToDo} from "./constructor.js";
import {list} from './varsModuel.js';

let nm = 0;

btnSendValue.addEventListener('click', function(){
   
    if(REG.test(input.value) == true || input.value == ""){
        console.warn("Empty text");
    }
    else if(REG.test(input.value) == false){
        // push object in list "todo"
        list.push(new constructorToDo(input.value,nm,false,false));
        // excute printlist object & "show element in page list"
        list[nm].printInList();

        var toSTR = JSON.stringify(list[nm]);
        
        localStorage.setItem(`${list[nm].valuetext}`,[toSTR]);
        // increment id as nm "id objects in list"
        nm+=1;
    }

});