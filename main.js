//User can add item into list
'use strict';

function addToShoppingList(event) {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    $('ul').append(
      '<li>' + $('.js-shopping-list-entry').val() + $('.shopping-list li').clone().insertAfter('.shopping-list li') + '</li>');
    // '<div class="shopping-item-controls">' + 
    //   '<button class = "shopping-item-toggle">' +
    //   '<span class="button-label"> check </span>' +
    //    '</button>' +
    //    '<button class = "shopping-item-delete">' +
    //    '<span class="button-label"> delete </span>' +
    //     '</button>' + '</div>' + '</li>');
    //.addClass('.shopping-list > li'/* 'shopping-item-controls', 'shopping-item-toggle', 'button-label', 'button-label', 'shopping-item-delete'*/)
  }
  );
}

  
//.submit(), preventDefault(), toggleClass(), and closest().
// $('ul').on('click', 'li', function(event) {
//   this.remove();
// });


$(addToShoppingList());
//User can remove item

//User can check and uncheck item
