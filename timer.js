let seconds = 59;
let time=this.document.querySelector(".tim_value");
const timer = () => {
    if (seconds >= 0) {
        time.innerHTML=`00:${seconds}`;
        setTimeout(timer, 1000); // 1 second waiting
    }
    else
    {
        alert("End of Game");
    }
    seconds -= 1;
    return seconds;
}