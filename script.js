$(function() {

    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        //set up text variable
        var text = $('#shopping-list-entry').val();
        
        // user can't add blank items
        
        if (text.trim().length > 0){
             
        // append text input + check/delete buttons to list
            let obj = `<li>
            <span class="shopping-item">${text}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
            </div>
        </li>`
        
        $(".shopping-list").append(obj);
             };
            });
        
    // delete function
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
        $(this).closest('li').remove();
    });
    // toggle class function
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

        
    });



