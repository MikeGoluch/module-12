var baseUrl = "https://kodilla.com/pl/bootcamp-api";
var myHeaders = {
    "X-Client-Id" : "X-Client-Id",
    "X-Auth-Token" : "X-Auth-Token"
}

$.ajax({
    url: baseUrl + "/board",
    method: "GET",
    success: function(response) {
        setupColumns(response.columns);
    }
});

$.ajaxSetup({
    headers: myHeaders
});

function setupColumns(columns) {
    columns.forEach(function (column) {
        var column = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
}

function setupCards(col, cards) {
    cards.forEach(function(card) {
        var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
        col.createCard(cardObj);
    });
}

// function randomString() {
//     var chars = "0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ";
//     var string = "";

//     for (var i = 0; i < 10; i++) {
//         string += chars[Math.floor(Math.random() * chars.length)];
//     }
//     return string;
// }

// CREATING COLUMNS
var todoColumn = new Column("To do");
var doingColumn = new Column("Doing");
var doneColumn = new Column("Done");

// ADDING COLUMNS TO THE BOARD
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// CREATING CARDS
var card1 = new Card("New task");
var card2 = new Card("Create kanban boards");

// ADDING CARDS TO COLUMNS
todoColumn.addCard(card1);
doingColumn.addCard(card2);