$(document).mouseup(function (e) {
  var div = $('.modal');
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    $('.modal-backdrop').addClass('is-hidden');
  }
});