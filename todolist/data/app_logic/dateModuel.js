
import {fullcover , liveDate} from "./varsModuel.js";

function dateUpdater(){
    let dateNow = new Date().toDateString();
    liveDate.textContent = dateNow;
}

setInterval(dateUpdater() , 2000);

let OriginDate;
const evrn = 18;
const mrng = 5;

setInterval(function(){
    OriginDate = new Date().getHours();
    if(OriginDate >= mrng && OriginDate <= evrn){
        fullcover.style.cssText = `
            background: url("./data/graphics/cover/T_4-01.jpg");
            background-size: cover;
        `;
        
    }
    else {
        fullcover.style.cssText= `
            background : url("./data/graphics/cover/nightCover.png");
            background-size: cover;
        `;
    }
}, 1000);



