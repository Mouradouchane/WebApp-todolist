import {mainChildes as child }from "./data/Scripts/elems.js" 

// Define left Menu
const leftMenu = child[0];
// Defin Element childs
var [save,trash,,sitting] = leftMenu.children;
var FullOptionContent = document.querySelector('#sitting');

sitting.onclick = () => {
        if(FullOptionContent.style.display == "none"){
                FullOptionContent.style.display = "block";
        }
        else{
                FullOptionContent.style.display = "none";
        }
};
