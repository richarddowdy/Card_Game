window.onload = function(){
    const cardGame = document.querySelectorAll(".cardGame");
    const flipCard = document.querySelectorAll(".flipCard");
    let cardFront = document.querySelectorAll(".cardFront");
    let cardBack = document.querySelectorAll(".cardBack");

    console.log(cardGame.length);
    console.log(flipCard.length);

    function flip(){
        this.classList.toggle("flip");
    }
    // Iterate over each flip card and assign a CLICK event listener
    for(let i = 0; i < flipCard.length; i++){
        flipCard[i].addEventListener("click", flip);
    };
    

};