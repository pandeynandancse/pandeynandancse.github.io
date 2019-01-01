
/*sliding my two div one- image and second - name*/ 
if (document.documentElement.clientWidth > 1280) {
function script(){
     setTimeout(function(){
         document.getElementById('img2').style.right = '60%'; // new left position is 1000px in this example
     }, 1000); // 2000 = 2 seconds after page load

     setTimeout(function(){
         document.getElementById('name').style.left = '50%'; // new left position is 1000px in this example
     }, 1000);
}

}

var i = 0;
var txt = 'My Profile'; /* The text */
var speed = 40; /* The speed/duration of the effect in milliseconds */

function run(){
  if (i < txt.length) {
    document.getElementById("prof").innerHTML += txt.charAt(i);
    i++;
    setTimeout(run, speed);
  }
}
/*slided my two div one- image and second - name*/ 

/* show / hide scroll to top button - jquery */
var p = $( "#profile" );
var offset = p.offset();
offset = offset.top;
$(window).scroll(function () {  
    if ($(window).scrollTop()   >  offset ) {
 $('#scrol').fadeIn();
    }
  else { $('#scrol').fadeOut(); }
});
    
/* show / hide scroll to top button - jquery - done*/

/*  onclick on navbar link smoothly scroll  to location of that page*/
	
    $("#myprofile").click(function() {
    $('html, body').animate({
        scrollTop: $("#profile").offset().top-50
    },500);
});


    $("#skils").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top-50
    },500);
});
    $("#contacting").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    },500);
});
    

    $("#scrol").click(function() {
    $('html, body').animate({
        scrollTop: $("#first").offset().top
    },500);
});


/*  onclick on navbar link smoothly scroll  to location of that page -done*/

