//User can add item into list
'use strict';

function addToShoppingList(event) {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    $('ul').append(
      '<li>' + $('.js-shopping-list-entry').val() + $('ul li').append() + '</li>'
    );
    console.log($('ul li'));
  });
  
//.submit(), preventDefault(), toggleClass(), and closest().
  // $('ul').on('click', 'li', function(event) {
  //   this.remove();
  // });
}

  $(addToShoppingList());
//User can remove item

//User can check and uncheck item
