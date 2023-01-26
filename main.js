// let popup = document.getElementById("popup");
// function myFunc()
// {
//     window.open('game.html','_self');
// }
// function openPopUp()
// {
//     popup.classList.add("free_popup");
// }
// function closePopUp()
// {
//     popup.classList.remove("free_popup");
// }
// let container=document.querySelector(".container");

// let bird5=document.querySelector(".bird5");
// let birdN10=document.querySelector(".birdN10");
window.addEventListener('load',function()
{
    let score=0;
    let sec;
    let params=new URLSearchParams(window.location.search);
    let nameCatched=params.get('theName');
    let welcomed=document.querySelector(".wel_value");
    welcomed.innerHTML=nameCatched;

    const randomBird = function ()
    {     
        setInterval(function()
        {
            do
            {
                let indexImage=(Math.floor(Math.random()*3));
                imageObject=document.images[indexImage];
                moveRight(imageObject,0);
            }while(indexImage<=3);
        },1000)
    }
    sec=setTimeout(timer, 1000); // 1 second waiting
    randomBird();
    moveDown();
    killing(score);
});//load