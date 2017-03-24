$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});




// $('html, body').stop().animate({
//  'scrollTop': $target.offset().top
//  }, 800, 'swing', function () {
//  window.location.hash = target;
//  });
//  });

count=0
$('.skill_row_1>#left_sk').click(function(){
	if ((count % 2)==0) {
	count++;
	$('.skill_row_1>#right_sk').animate({ "width": "30%" }, "slow" );
	$('.skill_row_1>#left_sk img').animate({ "left": "30%" }, "slow");
	$('.skill_row_1>#left_sk').animate({ "width": "70%" }, "slow" );
	$('.skill_row_1>#left_sk').css('background','rgba(255,255,255,0.7');
	$('.skill_row_1>#left_sk ul').animate({ "left": "20px" }, "slow");
	$('.skill_row_1>#right_sk img').animate({ "right": "0" }, "slow");
	$('.skill_row_1>#right_sk ul').animate({ "right": "-200%" }, "slow");
	$('.skill_row_1>#right_sk').css('background','inherit');
} else {
	$(this).css("background" , "inherit");
	$('.skill_row_1>#right_sk').animate({ "width": "50%"}, "slow");
	$('.skill_row_1>#left_sk img').animate({ "left": "0" }, "slow" );
	$('.skill_row_1>#right_sk img').animate({ "right": "0" }, "slow");
	$('.skill_row_1>#left_sk').animate({ "width": "50%" });
	$('.skill_row_1>#left_sk ul').animate({ "left": "-200%" }, "slow");
	count++;
	$('.skill_row_1>#right_sk ul').animate({ "right": "-200%" }, "slow");
	$('.skill_row_1>#right_sk').css('background','inherit');
}});

ct=0
$('.skill_row_1>#right_sk').click(function(){
	if ((ct % 2)==0) {
	ct++;
	$('.skill_row_1>#left_sk').css('background','none');
	$('.skill_row_1>#left_sk img').animate({ "left": "0" }, "slow");
	$('.skill_row_1>#left_sk ul').animate({ "left": "-200%" }, "fast");
	$('.skill_row_1>#right_sk').animate({ "width": "70%" }, "slow" );
	$('.skill_row_1>#left_sk').animate({ "width": "30%" }, "slow" );
	$('.skill_row_1>#right_sk').css('background','rgba(255,255,255,0.7');
	$('.skill_row_1>#right_sk ul').animate({ "right": "15%" }, "slow");
	$('.skill_row_1>#right_sk img').animate({ "right": "30%" }, "slow");
} else {
	$(this).css("background" , "none");
	$('.skill_row_1>#right_sk img').animate({ "right": "0" }, "slow");
	$('.skill_row_1>#right_sk ul').animate({ "right": "-200%" }, "slow");
	$('.skill_row_1>#left_sk').css('background','none');
	$('.skill_row_1>#right_sk').animate({ "width": "50%" }, "fast" );
	$('.skill_row_1>#left_sk').animate({ "width": "50%" }, "slow" );
	$('.skill_row_1>#left_sk img').animate({ "left": "0" }, "slow");
	$('.skill_row_1>#left_sk ul').animate({ "left": "-200%" }, "slow" );
	ct++;
}});

coun=0
$('.skill_row_2>#left_sk').click(function(){
	if ((coun % 2)==0) {
	coun++;
	$('.skill_row_2>#right_sk').animate({ "width": "30%" }, "slow" );
	$('.skill_row_2>#left_sk img').animate({ "left": "30%" }, "slow");
	$('.skill_row_2>#left_sk').animate({ "width": "70%" }, "slow" );
	$('.skill_row_2>#left_sk').css('background','rgba(255,255,255,0.7');
	$('.skill_row_2>#left_sk ul').animate({ "left": "20px" }, "slow");
	$('.skill_row_2>#right_sk img').animate({ "right": "0" }, "slow");
	$('.skill_row_2>#right_sk ul').animate({ "right": "-200%" }, "slow");
	$('.skill_row_2>#right_sk').css('background','inherit');
} else {
	$(this).css("background" , "inherit");
	$('.skill_row_2>#right_sk').animate({ "width": "50%"}, "slow");
	$('.skill_row_2>#left_sk img').animate({ "left": "0" }, "slow" );
	$('.skill_row_2>#right_sk img').animate({ "right": "0" }, "slow");
	$('.skill_row_2>#left_sk').animate({ "width": "50%" });
	$('.skill_row_2>#left_sk ul').animate({ "left": "-200%" }, "slow");
	coun++;
	$('.skill_row_2>#right_sk ul').animate({ "right": "-200%" }, "slow");
	$('.skill_row_2>#right_sk').css('background','inherit');
}});

ctu=0
$('.skill_row_2>#right_sk').click(function(){
	if ((ctu % 2)==0) {
	ctu++;
	$('.skill_row_2>#left_sk').css('background','none');
	$('.skill_row_2>#left_sk img').animate({ "left": "0" }, "slow");
	$('.skill_row_2>#left_sk ul').animate({ "left": "-200%" }, "fast");
	$('.skill_row_2>#right_sk').animate({ "width": "70%" }, "slow" );
	$('.skill_row_2>#left_sk').animate({ "width": "30%" }, "slow" );
	$('.skill_row_2>#right_sk').css('background','rgba(255,255,255,0.7');
	$('.skill_row_2>#right_sk ul').animate({ "right": "10%" }, "slow");
	$('.skill_row_2>#right_sk img').animate({ "right": "30%" }, "slow");
} else {
	$(this).css("background" , "none");
	$('.skill_row_2>#right_sk img').animate({ "right": "0" }, "slow");
	$('.skill_row_2>#right_sk ul').animate({ "right": "-200%" }, "slow");
	$('.skill_row_2>#left_sk').css('background','none');
	$('.skill_row_2>#right_sk').animate({ "width": "50%" }, "fast" );
	$('.skill_row_2>#left_sk').animate({ "width": "50%" }, "slow" );
	$('.skill_row_2>#left_sk img').animate({ "left": "0" }, "slow");
	$('.skill_row_2>#left_sk ul').animate({ "left": "-200%" }, "slow" );
	ctu++;
}});








// var sk = $ ('.skill');

// $('.skill_wrapper').hover(function(){
//     $(".skill, .skill_wrapper").animate({left: "0px"},{queue:false,duration:500});
//     $(".skill_wrapper").animate({left: "150px"},{queue:false,duration:500});
//     sk.hide();
// },function(){
//     $(".skill").animate({left: "-150px"},{queue:false,duration:500});
//     $(".skill_wrapper").animate({left: "0px"},{queue:false,duration:500});
//     sk.show();
// });