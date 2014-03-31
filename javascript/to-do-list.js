$(function() {
    var items = [],
        $list = $('#to-do-list');

    $.getJSON('javascript/data.json', function(data) {
        items = data;

        renderToDoList(items);

        $('#add-new-to-do-item').click(function() {
            var name = $('#new-to-do-item-name').val();
            items.push({name: name, finished: false});
            renderToDoList(items);
        });
    });


    function renderToDoList(items) {
        $list.html('');
        items.forEach(function(item) {
            var newItemElem = $('<li class="to-do-item"></li>');
            newItemElem.text(item.name);
            if(item.finished) {
                newItemElem.addClass('finished');
            }
            newItemElem.appendTo($list);
        });
    }
});
