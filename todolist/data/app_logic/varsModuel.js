
const fullcover = document.querySelector("cover");
const liveDate = fullcover.querySelector(".date");
export {fullcover , liveDate};

const fullList = document.querySelector("#list");
const EmptyGhost = document.querySelector("#isEmpty");
export {fullList , EmptyGhost};

const fullInput = document.querySelector("#lastpart");
const input = fullInput.querySelector("#input");
const btnSendValue  = fullInput.querySelector("#addtodo");
export {fullInput,input,btnSendValue};

const REG = new RegExp(" +","ig");
export {REG};

const sittingBTN = fullcover.querySelector("#Sitting");
export {sittingBTN};

const list = [];
export {list};

const click = new Audio("../data/sounds/click.mp3");
const trash = new Audio("../data/sounds/trash.mp3");
const notif = new Audio("../data/sounds/notifiy.mp3");
export {click,trash,notif};

