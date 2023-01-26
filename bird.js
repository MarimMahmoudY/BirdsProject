const moveRight=function(imageObject,left)
{
    let spaceH=(screen.height-imageObject.height);
    let top=Math.floor( Math.random() * (spaceH) );
    let id=setInterval(function(){
        imageObject.classList.remove("invisible");
        if((left<(innerWidth-imageObject.width))&&(top<(screen.height-imageObject.height)-200) )
        {
            sendBoom=function catchBird()
            {
                return imageObject;
            }
            imageObject.style.left=left+"px";
            imageObject.style.top=top+"px";   
        } 
        else
        {
            imageObject.classList.add("invisible");
            clearInterval(id);
        }
        left+=5;
    },20);//eof inetrval
}
