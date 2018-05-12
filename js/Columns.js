//class Column
function Column(name) {
    var self = this;

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();
    //method that create basic structure for a column
    function createColumn() {
        var $column = $("<div>").addClass("column");
        var $columnTitle = $("<h2>").addClass("column-title").text(self.name);
        var $columnCardList = $("<ul>").addClass("column-card-list");
        var $columnDelete = $("<button>").addClass("column-btn-delete");
        var $columnAddCard = $("<button>").addClass("add-card").text("Add a card");
        var $columnDeleteSymbol = $("<span  class='far fa-times-circle' aria-hidden='true' aria-hidden='true'></span>");
        //event listeners
        $columnDelete.click(function() {
            self.removeColumn();
        });
        $columnDelete.append($columnDeleteSymbol);
        //tutaj warunek
        $columnAddCard.click(function(event) {
            var condition = true;
            while (condition) {
                var cardName = prompt("Enter the name of the card");
                if (cardName.length > 0) {
                    var card = new Card(cardName);
                    self.addCard(card);
                    condition = false;
                } else {
                    alert("You have to enter a card name!");
                    condition = true;
                }
            }
        });

        $column.append($columnTitle).append($columnDelete).append($columnAddCard).append($columnCardList);

        return $column;
    }
}
//class prototype
Column.prototype = {
    addCard: function(card) {
        this.$element.children("ul").append(card.$element);
    },
    removeColumn: function() {
        this.$element.remove();
    }
}