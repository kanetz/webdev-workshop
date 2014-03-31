var items = [
    {name: 'My Task 1', finished: false},
    {name: 'My Task 2', finished: false},
    {name: 'My Task 3', finished: true},
    {name: 'My Task 4', finished: true}
];

$(function() {
    var $list = $('#to-do-list');

    renderToDoList(items);

    $('#add-new-to-do-item').click(function() {
        var name = $('#new-to-do-item-name').val();
        items.push({name: name, finished: false});
        renderToDoList(items);
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
