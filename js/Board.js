//board object
var board = {
    name: "Kanban Board",
    createColumn: function(column) {
        this.$element.append(column.$element);
        initSortable();
    },
    $element: $("#board .column-container")
};

//event listener
    //tutaj warunek
    $(".create-column").click(function(){
        var condition = true;
        while (condition) {
            var columnName = prompt("Enter a column name");
            if (columnName != null && columnName.length > 0) {
                $.ajax({
                    url: baseUrl + "/column",
                    method: "POST",
                    data: {
                        name: columnName
                    },
                    success: function(response) {
                        var column = new Column(response.id, columnName);
                        board.createColumn(column);
                    }
                });
                // var column = new Column(name);
                // board.createColumn(column);
                condition = false;
            } else {
                alert("You have to enter a column name!");
                condition = true;
            }
        }
    });
    //function responsible for drag n drop
    function initSortable() {
        $(".column-card-list").sortable({
            connectWith: ".column-card-list",
            placeholder: "card-placeholder",
            dropOnEmpty: true
        }).disableSelection();
    }