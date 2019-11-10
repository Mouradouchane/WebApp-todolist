
import {fullcover , liveDate} from "./varsModuel.js";

// let dateNow = new Date().toDateString();

function dateUpdater(){
    let dateNow = new Date().toDateString();
    liveDate.textContent = dateNow;
}

setInterval(dateUpdater() , 2000);



