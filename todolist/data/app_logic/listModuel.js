
import {fullList , EmptyGhost} from  "./varsModuel.js";
import {list} from './varsModuel.js';
import {constructorToDo} from './constructor.js';


setInterval(() => {
    
if(fullList.children.length == 0){
    EmptyGhost.style.cssText = "opacity : 1";
}
else{
    EmptyGhost.style.cssText = "opacity : 0";
}
 
} , 100);

window.onload = () => {
    var keysArch = Object.keys(localStorage);

        for(var archive = 0 ; archive < localStorage.length; archive+=1){

            var localToDo = JSON.parse(localStorage.getItem(`${keysArch[archive]}`));
                if(localToDo.doit == true){
                    new constructorToDo(localToDo.valuetext,localToDo.numb,false,localToDo.trashed).printInList();
                }
                else if(localToDo.doit == false){
                    new constructorToDo(localToDo.valuetext,localToDo.numb,true,localToDo.trashed).printInList();
                }
        }
}
