window.onload = function(){
    const flipCard = document.querySelectorAll(".flipCard");
    const startButton = document.querySelector(".startButton");

    // Initialize the variables for the cards that are clicked and flipped
    let firstFlip, secondFlip;

    // Checks to see if one card is already flipped during flip() function
    let flipped = false;

    // Shorter to read than the mess it takes to find the actual image within the element
    let firstCardImg, secondCardImg;

    // Counts the number of cards that are flipped over -- prevents more than two flipped at a time
    let cardsFlipped = 0;

    // Initialize Random number variable
    let randomNum;

    // STARTS THE GAME WHEN THE START BUTTON IS CLICKED
    startButton.addEventListener("click", startGame, true);


    function startGame(){

        // Making the couter and giving assigning it a HTML value
        let counter = document.querySelector(".counter");
        let count = 0;
        counter.innerHTML = count;
       
        // Removes the event listener from the start button so that it cannot be clicked mid-game
        startButton.removeEventListener("click", startGame, true);
        
        // Generates a random number for positioning and rearranges the flipcards
        randomOrder();
        
        function flip(){
            
            if(this.classList[1] === "flip" || cardsFlipped > 1) {
                // if the card has already been flipped, clicking on it will not do anything
                // or if there are already 2 cards flipped over, do nothing
            } else {
                // Add "flip" to the class list of the clicked card
                this.classList.add("flip");

                if(flipped){// if there is a card already flipped

                    cardsFlipped ++; // increments the number of cards flipped to 2
                    secondFlip = this; // assigns the second card clicked here

                    // gets second card image to compare
                    secondCardImg = this.childNodes[1].src.split("/")[this.childNodes[1].src.split("/").length -1];
                    
                    // compares the cards images
                    secondCardImg === firstCardImg ? removeClick() : unflip();
                    
                    // after unflipping the mismatched cards, no cards are flipped
                    flipped = false;

                } else { // if a card is not currently flipped

                    cardsFlipped ++; // first card flipped count
                    firstFlip = this; // assigns the first card clicked here

                    // gets first clicked card image to compare
                    firstCardImg = this.childNodes[1].src.split("/")[this.childNodes[1].src.split("/").length -1];

                    // sets boolean value to true when a card has been flipped
                    flipped = true; 
                }

                    // Increment the flip count by one each time a card is flipped and display it in html
                    counterAdd();
            }      
        } // end of flip function
        

        // Counter function
        function counterAdd(){
            count += 1;
            counter.innerHTML = count; 
        }

        // Removing the click event listener
        function removeClick(){
            firstFlip.removeEventListener("click", flip);
            secondFlip.removeEventListener("click", flip);
            cardsFlipped = 0; // resets cards flipped to 0
        }

        // Removing "flip" class from card to unflip it after 1000ms (1s)
        function unflip(){
            setTimeout(function(){
                firstFlip.classList.remove("flip");
                secondFlip.classList.remove("flip");
                cardsFlipped = 0; // resets cards flipped to 0
            }, 1000);
        }
        
        // Orders the flipcards by a randomly generated number
        function randomOrder(){
            for(let i = 0; i < flipCard.length; i++){ 
                randomNum = Math.floor(Math.random() * 16);
                flipCard[i].style.order = randomNum;
            }
        }

        // Iterate over each flip card and assign a CLICK event listener
        for(let i = 0; i < flipCard.length; i++){
            flipCard[i].addEventListener("click", flip);
        };     
    } // end of startGame function

};