
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

const SaveList = [];
const REG = new RegExp(" +","ig");
export {SaveList,REG};