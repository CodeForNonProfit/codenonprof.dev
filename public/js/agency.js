/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

 // mix it up jQuery


$(function(){

	// Instantiate MixItUp:
	
	$('#mix-it-up2').mixItUp();

});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

//code for form modals on get involved section//
$(document).ready(function() {
	$('#nominateModal').click (function() {
		$.ajax({
			type: "POST",
			url: "/process.php",
			data: $('form.contact').serialize(),
			success: function(msg) {
				alert("Thank you for getting involved! Someone from Hope to Code will contact you soon!");
				$('#aboutModal1').modal('hide');
			},
			error: function() {
				alert("failure");
			}
		});
	});
});