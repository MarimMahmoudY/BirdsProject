let bomb=document.querySelector(".bomb");
let container=document.querySelector(".containerB")
let boom=document.querySelector(".boom");

let moveDown=function()
{
    let down=0;
    let left=Math.floor( Math.random()*(container.clientWidth-bomb.clientWidth)  );
    bomb.classList.remove("invisible");  
    let id=setInterval(function()
    {       
        boom.classList.add("invisible");
        if(down<(container.offsetHeight-182))
        {  
            bomb.style.top=down+"px";
            bomb.style.left=left+"px";
            boom.style.top=(down-120)+"px";
            boom.style.left=(left-140)+"px";
        }
        else
        {
            bomb.classList.add("invisible");
            clearInterval(id);
            moveDown();
        } 
        down+=10;   
    },50) //end of setInterval
}  
function show(){
    bomb.classList.add("invisible");
    boom.classList.remove("invisible"); 
    sendBoom= function catchBoom()
    {
        return boom;
    }
    clearInterval(id);
    moveDown(); 
} 
