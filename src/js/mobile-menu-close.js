$(document).mouseup(function (e) {
  var div = $('.mobile-menu');
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    $('.backdrop').removeClass('is-open');
  }
});