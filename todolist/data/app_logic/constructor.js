import {fullList} from  "./varsModuel.js";
import {trash,click} from "./varsModuel.js";

export function constructorToDo(valuetext,numb,doit = false,trashed = false,list = fullList){

    this.bools = [false,true];
    this.boolsTRASH = [false,true];
    this.numb = GeneratorIDs(numb);
    this.list = list;
    this.valuetext = valuetext;
    this.doit = doit;
    this.trashed = trashed;
    this.trashSRC = "data/graphics/svg/garbage.svg";
    this.arrColor = ["rgb(255, 255, 255)","rgb(244, 87, 37)"];
    this.arrTextCase = ["none","line-through"];

    this.printInList = () => {

        this.list.insertAdjacentHTML('beforeend',`
            <ol class="light todo" id="L${this.numb}"> 
                <div class="light checker"> </div>
                <p class="light content"> ${this.valuetext} </p>
                <img src="${this.trashSRC}" class="light trash">
            </ol>

        `);
        if(this.doit == true){
            document.querySelector(`#L${this.numb}`).children[0].style.background = this.arrColor[1];
            this.arrColor.reverse();
            
            document.querySelector(`#L${this.numb}`).children[1].style.cssText = `text-decoration : ${this.arrTextCase[1]}`;
            this.arrTextCase.reverse();

            this.doit = this.bools[0];
            this.bools.reverse();
        }
        else if(this.doit == false){
            document.querySelector(`#L${this.numb}`).children[0].style.background = this.arrColor[0];
            this.arrColor.reverse();
            
            document.querySelector(`#L${this.numb}`).children[1].style.cssText = `text-decoration : ${this.arrTextCase[0]}`;
            this.arrTextCase.reverse();

            this.doit = this.bools[1];
            this.bools.reverse();
        }

        // doit method
        this.list.lastElementChild.children[0].onclick = () => {
        
        var ArchInLocal = JSON.parse(localStorage.getItem(`${this.valuetext}`));
        
                document.querySelector(`#L${this.numb}`).children[0].style.background = this.arrColor[0];
                this.arrColor.reverse();
                
                document.querySelector(`#L${this.numb}`).children[1].style.cssText = `text-decoration : ${this.arrTextCase[0]}`;
                this.arrTextCase.reverse();
    
                this.doit = this.bools[1];
                ArchInLocal.doit = this.doit;
                this.bools.reverse();
                ArchInLocal.bools.reverse();           
            localStorage.setItem(`${this.valuetext}`, JSON.stringify(ArchInLocal));

            //click effect
            click.play();
        }

        // delete method
        this.list.lastElementChild.children[2].onclick = () => {    
            document.querySelector(`#L${this.numb}`).remove();
            this.trashed = this.boolsTRASH[1];
            localStorage.removeItem(`${this.valuetext}`);
            this.boolsTRASH.reverse();

            //trash effect
            trash.play();
        };
    
    };

}

// random keywords function
function GeneratorIDs(num){
    let ALL_WORD = [];
    let i = 65;

    // get all words from A to Z
    for(i;i <= 90; i+=1){
            ALL_WORD.push(String.fromCharCode(i));
    }

    // length of random ID
    let LENGTH = 6;
    let Rand;
    let ID_ARRAY = [];

    // Generate Random Values
    for(let c = 0 ; c < LENGTH ; c+=1){
        Rand = Math.floor(Math.random() * ALL_WORD.length);
        ID_ARRAY.push(ALL_WORD[Rand]);
    }

    // final ID result
    let ID = ID_ARRAY.join("") +"_"+ num;
    return ID;
}
 

