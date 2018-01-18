//User can add item into list
'use strict';

$(function() {
  $('#js-shopping-list-form').submit(event => {
    const userTextElement = $(event.currentTarget).find('.js-shopping-list-entry');
    userTextElement.append();
  });  
});

$(function() {
  
  $('button').click(function(event) {
    $('ul').append(
      '<li>' +
      $('.js-display-user-text').text;
    '</li>'
    );
  });
  
  $('ul').on('click', 'li', function(event) {
    this.remove();
  });
});
//User can remove item

//User can check and uncheck item
