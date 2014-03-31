$(function() {
    var items = [],
        $list = $('#to-do-list');

    $.getJSON('javascript/data.json', function init(data) {
        items = data;

        renderToDoList(items);

        $('#add-new-to-do-item').click(function addNewToDoItem() {
            var name = $('#new-to-do-item-name').val();
            items.push({name: name, finished: false});
            renderToDoList(items);
        });

        $('#archive-to-do-item').click(function archiveToDoItem() {
            items = items.filter(function(item) { return !item.finished; });
            renderToDoList(items);
        });
    });


    function renderToDoList(items) {
        $list.empty();
        items.forEach(appendNewToDoItemElem);
    }

    function appendNewToDoItemElem(item) {
        var newItemElem = $('<li class="to-do-item"><label><input type="checkbox" class="to-do-item-check" /><span class="to-do-item-name"></span></label></li>'),
            itemNameElem = newItemElem.find('.to-do-item-name'),
            itemCheckElem = newItemElem.find('.to-do-item-check');
        itemNameElem.text(item.name);
        itemCheckElem.click(function finishItem() {
            item.finished = true;
            renderToDoList(items);
        });
        if(item.finished) {
            newItemElem.addClass('finished');
            itemCheckElem.attr('checked', true).attr('disabled', true);
        }
        newItemElem.appendTo($list);
    }
});
