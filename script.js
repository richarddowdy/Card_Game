window.onload = function(){
    const cardGame = document.querySelectorAll(".cardGame");
    const flipCard = document.querySelectorAll(".flipCard");
    let cardFront = document.querySelectorAll(".cardFront");
    let cardBack = document.querySelectorAll(".cardBack");

    console.log(cardGame.length);
    console.log(flipCard.length);
    
    // Making the couter
    let counter = document.querySelector(".counter");
    let count = 0;
    counter.innerHTML = count;
    // Making a "match" variable
    let match = false;

    // Counts the number of cards that have been flipped
    let flipped = 0;


    function flip(){
        if(this.classList[1] === "flip") {
            
        } else {

            this.classList.toggle("flip");
    
            // console.log(this.classList);
            // console.log(this.classList[1]);

            // sets the cardImg variable to the image src of the card being flipped
            // so that it can be compared to others
            let cardImg = this.childNodes[1].src;
            console.log(typeof cardImg);
            console.log(cardImg);

            // trying to check for a match
            if(cardImg){
                console.log("yes")
            } else{
                cardImg = this.childNodes[1].src;
            }

            // Incriment the flip count by one each time and display it in html
            count += 1;
            counter.innerHTML = count;

            //this.removeEventListener("click", flip);
        }       
    }


    // Iterate over each flip card and assign a CLICK event listener
    for(let i = 0; i < flipCard.length; i++){
        flipCard[i].addEventListener("click", flip);
        
    };
    

};