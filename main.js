canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
themarsimagesarray=["my_mars_pic1.jfif","my_mars_pic2.jfif","my_mars_pic3.jfif","my_mars_pic4.jfif","mars.jpg"];
randomnumber=Math.floor(Math.random()*5);
console.log(randomnumber);

roverwidth=120;
roverheight=100;



backgroundimage=themarsimagesarray[randomnumber];
roverimage="rover.png";

roverX=10;
roverY=10;

function add() {
    backroundimg=new Image();
    backroundimg.onload=uploadbackground;
    backroundimg.src=backgroundimage;

    roverimg=new Image();
    roverimg.onload=uploadrover;
    roverimg.src=roverimage;

}
function uploadbackground() {
    ctx.drawImage(backroundimg,0,0,canvas.width,canvas.height);

}
function uploadrover() {
ctx.drawImage(roverimg,roverX,roverY,roverwidth,roverheight);
}
window.addEventListener("keydown",thekeydown);

function thekeydown(e){
    keypressed=e.keyCode;

    if(keypressed=='38'){
        up();
        console.log("up");

    }
    if(keypressed=='40'){
        down();
        console.log("down");

    }
    if(keypressed=='37'){
        left();
        console.log("left");

    }
    if(keypressed=='39'){
        right();
        console.log("right");

    }
}
function up() 
{
 if(roverY > 0) {

    roverY=roverY - 11;
    console.log(roverX,roverY);
    uploadbackground();
    uploadrover();

        
    }
}
function down() 
{
 if(roverY < 500) {

    roverY=roverY + 11;
    console.log(roverX,roverY);
    uploadbackground();
    uploadrover();

        
    }
}

function left()  {

 if(roverX > 0) {

    roverX=roverX - 11;
    console.log(roverX,roverY);
    uploadbackground();
    uploadrover();

        
    }
}

function right()  {

    if(roverX < 700) {
   
       roverX=roverX + 11;
       console.log(roverX,roverY);
       uploadbackground();
       uploadrover();
   
           
       }
   }

