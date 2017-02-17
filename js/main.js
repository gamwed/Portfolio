$('a[href^="#"]').bind('click.smoothscroll',function (e) {
e.preventDefault(); 
var target = this.hash,
$target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 800, 'swing', function () {
 window.location.hash = target;
 });
 });

count=0
$('#left_sk').click(function(){
	if ((count % 2)==0) {
	count++;
	$('#right_sk').animate({ "width": "30%" }, "slow" );
	$('.skill_html img').animate({ "left": "30%" }, "slow");
	$('#left_sk').animate({ "width": "70%" }, "slow" );
	$('#left_sk').css('background','rgba(255,255,255,0.7');
	$('.skill_html ul').animate({ "left": "0" }, "slow");
	$('.skill_css img').animate({ "right": "0" }, "slow");
	$('.skill_css ul').animate({ "right": "-200%" }, "slow" );
} else {
	$(this).css("background" , "none");
	$('#right_sk').animate({ "width": "50%"}, "slow");
	$('.skill_html img').animate({ "left": "0" }, "slow" );
	$('.skill_css img').animate({ "right": "0" }, "slow");
	$('#left_sk').animate({ "width": "50%" });
	$('.skill_html ul').animate({ "left": "-200%" }, "slow");
	count++;
}});

ct=0
$('#right_sk').click(function(){
	if ((ct % 2)==0) {
	ct++;
	$('.skill_html ul').animate({ "left": "-200%" }, "fast");
	$('#right_sk').animate({ "width": "70%" }, "slow" );
	$('#left_sk').animate({ "width": "30%" }, "slow" );
	$('#right_sk').css('background','rgba(255,255,255,0.7');
	$('.skill_css ul').animate({ "right": "15%" }, "slow");
	$('.skill_css img').animate({ "right": "30%" }, "slow");

} else {
	$(this).css("background" , "none");
	$('.skill_css img').animate({ "right": "0" }, "slow");
	$('.skill_css ul').animate({ "right": "-200%" }, "slow" );
	$('#right_sk').animate({ "width": "50%" }, "fast" );
	$('#left_sk').animate({ "width": "50%" }, "slow" );
	$('.skill_html img').animate({ "left": "0" }, "slow");
	$('.skill_html ul').animate({ "left": "-200%" }, "slow" );
	ct++;
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