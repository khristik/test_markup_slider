(function(){

  var dly = 200;

  $('.trigger').each(function() {
    var el = $(this); // buttons arrows
    el.click(function () {
      $(".inner-container").toggleClass("show");
    })
  });

    $('.scroll-gal').each(function() { // caring about multi instances

    var el = $(this),
      ul = $('ul', el);

    $('div', el).not('.vewport').click(function() {

      // in case any animation in progress we do nothing
      if( ul.is(':animated') ) return;

      var first = $('li:first', ul),
        last = $('li:last', ul);

      if($(this).hasClass('move-left')){
        ul.css('left', -last.outerWidth(true)).prepend(last).animate({'left': 0}, dly);
      } else if ($(this).hasClass('move-right')) {
        ul.animate({'left': -first.outerWidth(true)}, dly, function(){
          $(this).append(first).css('left', 0)
        });
      }

    }); // navigation click handler

  }); // each loop

})();