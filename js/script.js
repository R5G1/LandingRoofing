$(document).ready(function () {
  $('.header__bureger').click(function (event) {
    $(
      '.header__bureger,.nav-link,.nav-link__nav,.contact-information,body'
    ).toggleClass('active');

    $('body').toggleClass('lock');
  });
});

$('#phone').mask('+7 (999) 999-99-99');

$('#phone').on('blur', function () {
  var last = $(this)
    .val()
    .substr($(this).val().indexOf('-') + 1);

  if (last.length == 5) {
    var move = $(this)
      .val()
      .substr($(this).val().indexOf('-') + 1, 1);

    var lastfour = last.substr(1, 4);
    var first = $(this).val().substr(0, 9);

    $(this).val(first + move + '-' + lastfour);
  }
});
