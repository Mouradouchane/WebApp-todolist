
function CanvasFactor(){
    document.body.appendChild(document.createElement('canvas'));
    return document.querySelector('canvas');
}

function CanvasSetup(cvs){
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    cvs.style.cssText = `position: fixed; top: 0px; left: 0px ;overflow : hidden;`;
}

function o(ct = ctx){
    this.ct = ct;
    this.size = 15;
    this.color = "black";
    this.x = Math.ceil(Math.random() * ( canvas.width - 10 ));
    this.y = Math.ceil(Math.random() * ( canvas.height - 10 ));
    
    this.draw = () => {
    this.ct.fillStyle = this.color;
    this.ct.beginPath();
    this.ct.arc(this.x,this.y, this.size, Math.PI*2 ,0,false);
    this.ct.fill();
    this.ct.closePath();
    this.ct.stroke();
    };

    this.move = () => { 
    // x
    if(this.x >= (canvas.width - this.size)){
        --this.spX;
    }
    else if(this.x <= this.size){
        ++this.spX;
    };
    // y
    if(this.y >= (canvas.height - this.size)){
        --this.spY;
    }
    else if(this.y <= this.size){
        ++this.spY;
    };
    this.x += this.spX;
    this.y += this.spY;
    };

    this.ReverseMove = () => { 
        // x
        if(this.x >= (canvas.width - this.size)){
            ++this.spX;
        }
        else if(this.x <= this.size){
            --this.spX;
        };
        // y
        if(this.y >= (canvas.height - this.size)){
            ++this.spY;
        }
        else if(this.y <= this.size){
            --this.spY;
        };
        this.x += -this.spX;
        this.y += -this.spY;
    };

    this.bigger = () => {
        if(ms.x >= this.x - this.size  && ms.x <= this.x + this.size && ms.y >= this.y - this.size  && ms.y <= this.y + this.size ){
            if(this.size >= 50){
                this.size = 50;
            }
            else{
                this.size +=1;
            }
        }
        else{
            if(this.size <= 15){
                this.size = 15;
            }
            else{
                this.size -=0.5;
            }
        }
    };

    this.spX = Math.random() * 1;
    this.spY = Math.random() * 1; 
}
var ms = {
    x : undefined,
    y : undefined,
}
//==========================================
let SkyColor = "yellow";

const canvas = CanvasFactor();
CanvasSetup(canvas);
window.onresize = () => CanvasSetup(canvas);

const ctx = canvas.getContext("2d");
var cir = [];

for( let i = 0 ; i <= 120 ; i+=1) {
    cir.push(new o(ctx));
};

function Animation(){
    
    ctx.fillStyle = SkyColor;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    for(let i = 0 ; i < cir.length ; i+=1){
        if( i % 3 == 0){
            cir[i].draw();
            cir[i].move();
            cir[i].bigger();
        }
        else{
            cir[i].draw();
            cir[i].ReverseMove();
            cir[i].bigger();
        }
    }
   
    requestAnimationFrame(Animation);
}

Animation();

canvas.addEventListener("mousemove",function(event){
        ms.x = event.x;
        ms.y = event.y;
});