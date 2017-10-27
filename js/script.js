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
        $cards.eq(current).css("background-color", '#00bfff');
        
        $('#nxtBtn').on( 'click', function() {
			if( isAnimating ) {
				return false;
			}
			if( animcursor > 17 ) {
				animcursor = 1;
			}
			nextCard( animcursor );
            ++animcursor;
            if(animcursor == 16){
                $('#nxtBtn').css('visiblity', 'hidden');
            }
		} );
    };

    function nextCard(animation){
        var images=['imgs/neetuu_93-1.jpg',
                    'imgs/neetuu_93-2.jpg',
                    'imgs/neetuu_93-3.jpg'];

        var randomNumber = Math.floor(Math.random() * images.length);
        var bgImg = 'url(' + images[randomNumber] + ')';

        $('body').css({'background':bgImg, 
                        'background-size':'cover', 
                        'background-repeat': 'no-repeat', 
                        'background-position': 'center' });
        
        function getRandomColor() {
            var colorArr = [ 'rgb(15, 201, 41)',
                            'rgb(102, 102, 255)',
                            'rgb(0, 102, 255)',
                            'rgb(0, 204, 0)',
                            'rgb(255, 51, 0)',
                            'rgb(255, 0, 102)',
                            'rgb(102, 0, 255)',
                            'rgb(0, 204, 153)',
                            'rgb(204, 51, 153)',
                            'rgb(51, 153, 255)'];

            var randomNumber = Math.floor(Math.random() * colorArr.length);

            var color  = colorArr[randomNumber];

            return color;
        }
                          
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
            $nextCard.css("background-color", getRandomColor());
            $nextCard.addClass('animated slideInRight card_current');

            $nextCard.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $nextCard.removeClass('animated slideInRight');
            });
        });

        
    }

    init();
})();