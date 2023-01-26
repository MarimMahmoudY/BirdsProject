const killing=function(score)
{
    let bird=sendbird();
    let boom=sendBoom();
    let totaslScore=this.document.querySelector(".sc_value");
    if(boom.offsetLeft<(bird.offsetLeft-bird.width) || (bird.offsetLeft<(boom.offsetLeft+boom.width)) )
    {
        bird.classList.add("invisible");
        if(bird.Classlist.contains("bird10"))
        {
            score+=10;
            totaslScore.innerHTML=`00:${score}`;
        }
        else if(bird.Classlist.contains("birdN10"))
        {
            if(score<=10)
            {
                score=0;
                totaslScore.innerHTML=`00:${score}`;
            }
            else
            {
                score-=10;
                totaslScore.innerHTML=`00:${score}`;
            }
        }
        if(bird.Classlist.contains("bird5"))
        {
            score+=5;
            totaslScore.innerHTML=`00:${score}`;
        }
    }
}