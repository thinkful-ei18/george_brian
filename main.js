//User can add item into list
'use strict';

function addToShoppingList(event) {
  $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    $(this).parent().parent().remove();
  });
  $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
    $(this).parent().parent().find('.shopping-item').toggleClass('shopping-item__checked');
  });
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    $('.shopping-list').append(`<li>   
      <span class="shopping-item"> ${$('.js-shopping-list-entry').val()} </span> 
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
        <span class="button-label"> check </span> </button> 
        <button class="shopping-item-delete">
        <span class="button-label"> delete </span> </button> </div> </li>`);
    //.addClass('.shopping-list > li'/* 'shopping-item-controls', 'shopping-item-toggle', 'button-label', 'button-label', 'shopping-item-delete'*/)
  });
}

//$('.shopping-list li').clone().insertAfter(".shopping-list li");

//.submit(), preventDefault(), toggleClass(), and closest().
// $('ul').on('click', 'li', function(event) {
//   this.remove();
// });


$(addToShoppingList());
//User can remove item

//User can check and uncheck item