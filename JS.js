img1 = document.getElementsByClassName("dice")[0];
img2 = document.getElementsByClassName("dice")[1];
result1 = document.getElementsByClassName("op")[0];
result2 = document.getElementsByClassName("op")[1];

function roll(){
    let ran = Math.floor(Math.random() * 6) + 1;
    let src = "dice" + ran + ".png";
    let dice = "Images/" + src;
    img1.setAttribute("src", dice);
    result1.innerHTML = `${ran}`;
    
    let ran2 = Math.floor(Math.random() * 6) + 1;
    let src2 = "dice" + ran2 + ".png";
    let dice2 = "Images/" + src2;
    img2.setAttribute("src", dice2);
    result2.innerHTML = `${ran2}`;

    const resultValue1 = parseInt(result1.innerHTML);
    const resultValue2 = parseInt(result2.innerHTML);

    if(resultValue1 === resultValue2){
        document.querySelector(".title").innerHTML="Tie";
    }else if(resultValue1>resultValue2){
        document.querySelector(".title").innerHTML="Player 1 Wins!";
    }else{
        document.querySelector(".title").innerHTML="Player 2 Wins!";
    }
}        