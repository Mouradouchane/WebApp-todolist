
import {fullcover , liveDate} from "./varsModuel.js";

// let dateNow = new Date().toDateString();

function dateUpdater(){
    let dateNow = new Date().toDateString();
    liveDate.textContent = dateNow;
}

setInterval(dateUpdater() , 2000);

const sittingBTN = fullcover.querySelector("#Sitting");
const listSitting = fullcover.querySelector("#ListSitting");
const listCase = ["none","block"];

sittingBTN.onclick = () => {
    listSitting.style.cssText = `display : ${listCase[1]}`;
    listCase.reverse();
}
