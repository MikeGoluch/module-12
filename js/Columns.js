//class Column
function Column(id, name) {
    var self = this;

    this.id = id;
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
            event.preventDefault();
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
            $.ajax({
                url: baseUrl + "/card",
                method: "POST",
                data: {
                    name: cardName,
                    bootcamp_kanban_column_id: self.id
                },
                success: function(response) {
                    var card = new Card(response.id, cardName);
                    self.createCard(card);
                }
                
            });
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
        var self = this;
        $.ajax({
            url: baseUrl + "/column" + self.id,
            method: "DELETE",
            success: function(response) {
                self.element.remove();
            }
        });

    }
}