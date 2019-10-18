import {fullList, fullcover} from  "./varsModuel.js";

export function constructorToDo(valuetext,list = fullList){

    this.list = fullList;
    this.valuetext = valuetext;
    this.trashSRC = "data/graphics/svg/garbage.svg";
    this.printInList = () => {
        //append child ol
            this.list.appendChild(document.createElement("ol"));
            this.list.lastElementChild.setAttribute("class","light todo");

        //append div checker
            this.list.lastElementChild.appendChild(document.createElement("div"));
            this.list.lastElementChild.lastElementChild.setAttribute("class","light checker");
          
            this.list.lastElementChild.lastElementChild.onclick = () => this.checkedORnot();
      
        //append p text content
            this.list.lastElementChild.appendChild(document.createElement("p"));
            this.list.lastElementChild.lastElementChild.setAttribute("class","light content");
            this.list.lastElementChild.lastElementChild.textContent = this.valuetext;

        //append img trash 
            this.list.lastElementChild.appendChild(document.createElement("img"));
            this.list.lastElementChild.lastElementChild.setAttribute("class","light trash");
            this.list.lastElementChild.lastElementChild.setAttribute("src", this.trashSRC);     
            this.list.lastElementChild.lastElementChild.onclick = this.rm;
    };
    this.rm = () => {
                this.list.children[0].remove();
    };
    this.checkedORnot = () => {
        
    };
   
}