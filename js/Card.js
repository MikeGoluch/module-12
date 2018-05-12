//class Card
function Card(description) {
    var self = this;

    this.id = randomString();
    this.description = description;
    this.$element = createCard();
    //method that create basic structure for a card
    function createCard() {
        var $card = $("<li>").addClass("card");
        var $cardDescription = $("<p>").addClass("card-description").text(self.description);
        var $cardDelete = $("<button>").addClass("card-btn-delete");
        var $cardDeleteSymbol = $("<span  class='far fa-times-circle' aria-hidden='true' aria-hidden='true'></span>");
        //event listeners
        $cardDelete.click(function(){
            self.removeCard();
        });

        $cardDelete.append($cardDeleteSymbol);
        $card.append($cardDelete).append($cardDescription);
        return $card;
    }
}
//class prototype
Card.prototype = {
    removeCard: function() {
        this.$element.remove();
    }
}