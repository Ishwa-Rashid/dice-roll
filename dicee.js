// function navigationType(){

//     var result;
//     var p;

//     if (window.performance.getEntriesByType("navigation")){
//        p=window.performance.getEntriesByType("navigation")[0].type;

//        if (p=='navigate'){result=0}
//        if (p=='reload'){result=1}
//        if (p=='back_forward'){result=2}
//        if (p=='prerender'){result=3} //3 is my invention!
//     }
//     return result;
// }

if(window.performance.getEntriesByType("navigation")[0].type==="reload"){

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomDicePath1 = "images\\" + randomDiceImage1;
    var image1 = document.getElementsByClassName("img1");
    image1[0].setAttribute("src", randomDicePath1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";
    var randomDicePath2 = "images\\" + randomDiceImage2;
    var image2 = document.getElementsByClassName("img2");
    image2[0].setAttribute("src", randomDicePath2);

    if(randomNumber1 > randomNumber2){

        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";

    }else if(randomNumber1 < randomNumber2){

        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";

    }else {
        
        document.querySelector("h1").innerHTML = "Draw!";
    }
}
