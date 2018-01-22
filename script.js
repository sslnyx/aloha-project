$('.carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$('a:link').on('click', function () {
  $(this).css('border', '1px dotted');
  $(this).parent().siblings().find('a').css('border', '0px dotted');
});



$('button').click(function (e) {
  var sEmail = $('.email').val();

  //check if empty input
  if ($.trim(sEmail).length == 0 ) {
    alert('Please submit a valid email address.');
    e.preventDefault();
  }

  if (validateEmail(sEmail)) {
    alert('Thanks for subscribing!');
    e.preventDefault();
  }

  // else{
  //   e.preventDefault();
  // }

});


function validateEmail(sEmail) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (filter.test(sEmail)) {
    return true;
  } else {
    return false;
  }
}

// $("div").on("click", "button", function(event) {
//   // Stop the default behavior on the button click
//   event.preventDefault();
//   // Now perform our custom button click actions here...
// });