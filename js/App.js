var baseUrl = "https://kodilla.com/pl/bootcamp-api";
var myHeaders = {
    "X-Client-Id": "3185",
    "X-Auth-Token": "3677e108ad39b1b2cd88bf4302f177d2"
};

$.ajaxSetup({
    headers: myHeaders
});

$.ajax({
    url: baseUrl + "/board",
    method: "GET",
    success: function(response) {
        setupColumns(response.columns);
    }
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