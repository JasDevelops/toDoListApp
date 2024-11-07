$(function () {
    function newItem() {
        // add new item
        let list = $('#list'); // assign list to variable
        let inputValue = $('#input').val(); // store value of input field
        let li = $('<li></li>'); // create new <li>

        li.append(inputValue); //append inputValue
        list.append(li); //append <li> from list

        // add crossing out function
        li.on('dblclick', function () {
            li.addClass('strike'); // cross out 
        });
    }
    // Link function to click-button
    $('#button').click(newItem);
});