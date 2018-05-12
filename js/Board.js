//board object
var board = {
    name: "Kanban Board",
    addColumn: function(column) {
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
            var name = prompt("Enter a column name");
            if (name.length > 0) {
                var column = new Column(name);
                board.addColumn(column);
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