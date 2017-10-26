var cradTransition = (function(){

    var $cardContainer = $('#card_container');
    var $cards = $cardContainer.children('div.card');
    var cardCount = $cards.length,
    animcursor = 1,
    current = 0,
    isAnimating = false;
    
    console.log($cards);

    function init(){
        $cards.eq( current ).addClass('card_current');
        
        $('#nxtBtn').on( 'click', function() {
			if( isAnimating ) {
				return false;
			}
			if( animcursor > 2 ) {
				animcursor = 1;
			}
			nextCard( animcursor );
			++animcursor;
		} );
    };

    function nextCard(animation){
        var $currentCard = $cards.eq( current );

        if( current < cardCount - 1 ) {
            ++current;
        }
        else {
            current = 0;
        }

        var $nextCard = $cards.eq( current );

        $currentCard.addClass('animated bounceOutLeft');
        $currentCard.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $currentCard.removeClass('animated bounceOutLeft card_current');
            $nextCard.addClass('animated slideInRight card_current');

            $nextCard.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $nextCard.removeClass('animated slideInRight');
            });
        });

        
    }

    init();
})();