import {fullList} from  "./varsModuel.js";
import {list} from "./varsModuel.js";

export function constructorToDo(valuetext,numb,doit = false,trashed = false,list = fullList){

    this.numb = numb;
    this.list = list;
    this.valuetext = valuetext;
    this.doit = doit;
    this.trashed = trashed;
    this.trashSRC = "data/graphics/svg/garbage.svg";
    this.arrColor = ["rgb(255, 255, 255)","rgb(244, 87, 37)"];
    this.arrTextCase = ["none","line-through"];
    this.printInList = function(){
      
        //append child ol
        this.list.appendChild(document.createElement("ol"));
        this.list.lastElementChild.setAttribute("class","light todo");
        this.list.lastElementChild.setAttribute("id", `L${this.numb}`);
       
        //append div checker
            this.list.lastElementChild.append(document.createElement("div"));
            this.list.lastElementChild.lastElementChild.setAttribute("class","light checker");
            this.list.lastElementChild.lastElementChild.onclick = () => {
                document.querySelector(`#L${this.numb}`).children[0].style.background = this.arrColor[1];
                this.arrColor.reverse();
                document.querySelector(`#L${this.numb}`).children[1].style.cssText = `text-decoration : ${this.arrTextCase[1]}`;
                this.arrTextCase.reverse();

                this.doit = true;
            };
      
        //append p text content
            this.list.lastElementChild.appendChild(document.createElement("p"));
            this.list.lastElementChild.lastElementChild.setAttribute("class","light content");
            this.list.lastElementChild.lastElementChild.textContent = this.valuetext;

        //append img trash 
            this.list.lastElementChild.appendChild(document.createElement("img"));
            this.list.lastElementChild.lastElementChild.setAttribute("class","light trash");
            this.list.lastElementChild.lastElementChild.setAttribute("src", this.trashSRC);     
            this.list.lastElementChild.lastElementChild.onclick = () => {
                document.querySelector(`#L${this.numb}`).remove();
                this.trashed = true;
            };
    };
  
}