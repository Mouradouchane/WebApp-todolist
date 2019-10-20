
import {fullList , EmptyGhost} from  "./varsModuel.js";

setInterval(() => {
    
if(fullList.children.length == 0){
    EmptyGhost.style.cssText = "opacity : 1";
}
else{
    EmptyGhost.style.cssText = "opacity : 0";
}
 
} , 100);
