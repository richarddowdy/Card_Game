window.onload = function(){
    const cardGame = document.querySelectorAll(".cardGame");
    const flipCard = document.querySelectorAll(".flipCard");
    
    // The cards currently being compared
    let firstFlip, secondFlip;

    // Checks to see if one card is already flipped
    let flipped = false;

    // Shorter to read than the mess it takes to find the actual image within the element
    let firstCardImg, secondCardImg;

    // Making the couter
    let counter = document.querySelector(".counter");
    let count = 0;
    counter.innerHTML = count;

    
    function flip(){
        
        if(this.classList[1] === "flip") {
            // if the card has already been flipped, clicking on it will not do anything
        } else {
            // Add "flip" to the class list of the clicked card
            this.classList.add("flip");
            
            if(flipped){
                secondFlip = this;
                // gets second card image to compare
                secondCardImg = this.childNodes[1].src.split("/")[this.childNodes[1].src.split("/").length -1];

                secondCardImg === firstCardImg ? removeClick() : unflip();
                
                // after unflipping the mismatched cards, no cards are flipped
                flipped = false;

            } else {
            firstFlip = this; 
            // gets first clicked card image to compare
            firstCardImg = this.childNodes[1].src.split("/")[this.childNodes[1].src.split("/").length -1];

            // sets boolean value to true when a card has been flipped
            flipped = true; 

            }
            // Incriment the flip count by one each time a card is flipped and display it in html
            counterAdd();
        }      
    }
    
    // Counter function
    function counterAdd(){
        count += 1;
        counter.innerHTML = count; 
    }


    // Removeing the click event listener
    function removeClick(){
        firstFlip.removeEventListener("click", flip);
        secondFlip.removeEventListener("click", flip);
    }


    // Removing "flip" class from card to unflip it
    function unflip(){
        setTimeout(function(){
            firstFlip.classList.remove("flip");
            secondFlip.classList.remove("flip");
        }, 1000);
    }

    
    // Iterate over each flip card and assign a CLICK event listener
    for(let i = 0; i < flipCard.length; i++){
        flipCard[i].addEventListener("click", flip);
    };
};