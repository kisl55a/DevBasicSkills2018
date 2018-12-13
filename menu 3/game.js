function game()
{
    if (document.getElementById('checkButton').textContent == 'Show') {
        document.getElementById('table').style.visibility = 'visible';
        document.getElementById('checkButton').textContent = 'Clean';

    }
    else {
        document.getElementById('table').style.visibility = 'hidden';
        document.getElementById('checkButton').textContent = 'Show';

    }
    a=getRandomInt(-10, 10);
    b=getRandomInt(-10, 10);
    document.getElementById('math').innerHTML=a+"+"+b;
   /*document.getElementById('gameButton1').innerText="";
    document.getElementById("gameButton2").textContent="sdad";
    document.getElementById("gameButton3").textContent=(a+b-1);
    document.getElementById("gameButton4").textContent=(a+b-2);*/

   // document.getElementById("gameLayout").innerHTML=0;
}
function turnGameOn() {
    if (document.getElementById('gameCheckButton').textContent == 'Start') {
        document.getElementById('gameLayout').style.visibility = 'visible';
        document.getElementById('gameCheckButton').textContent = 'Reset';

    }
    else {
        document.getElementById('gameLayout').style.visibility = 'hidden';
        document.getElementById('gameCheckButton').textContent = 'Start';

    }
    
}
function game()
{
    a=getRandomInt(0, 10);
    b=getRandomInt(0, 10);
    document.getElementById('math').innerHTML=a+"+"+b;
    if(document.getElementById('pushTheAnswer').clicked == true)
    var answer = Number(document.getElementById("answer").value);
    if (answer==(a+b))
    {
        document.getElementById('comment').innerHTML="Right";
    }
}
