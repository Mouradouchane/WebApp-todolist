
import {fullList} from "./data/app_logic/varsModuel.js";
import {sittingBTN as reloader} from "./data/app_logic/varsModuel.js";


reloader.onclick = function(){
    try{
        fullList.innerHTML = "";
    }
    catch(error){
        console.exception("wrong clear because\n",error);
    }
    finally{
        localStorage.clear();
    }
}

