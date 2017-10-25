var cardContainer= document.getElementById('card_container').children;
var cards = document.getElementById('card_container').children;
console.log(cardContainer);
console.log(cards[0]);
console.log(cards.length);

var count;

init();

function init(){
    var firstCard = cards[0];
    firstCard.classList.add('card_current');
    count = 0;
}

function animateCard(){

    var currentCard = cards[count];
    currentCard.classList.remove('card_current');
    currentCard.classList.add('card-fade');

    count++;

    if(count < cards.length){
        var nextCard = cards[count];
        nextCard.classList.add('card_current');
    }else {
        count = 0;
        var currentCard = cards[count];
        currentCard.classList.add('card_current');
    }
    
}