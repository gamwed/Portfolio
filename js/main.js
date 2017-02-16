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