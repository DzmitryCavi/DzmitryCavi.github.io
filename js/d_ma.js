jQuery(document).ready(function($) {
  $('img').addClass(' img-fluid');
});

//Exelent little functions to use any time when class modification is needed
function hasClass(ele, cls) {
 return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
function addClass(ele, cls) {
 if (!hasClass(ele, cls)) ele.className += " " + cls;
}
function removeClass(ele, cls) {
 if (hasClass(ele, cls)) {
 var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
 ele.className = ele.className.replace(reg, ' ');
 }
}

//Add event from js the keep the marup clean
function init() {
 document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
}

//The actual fuction
function toggleMenu() {
 var ele = document.getElementsByTagName('body')[0];
 if (!hasClass(ele, "open")) {
 addClass(ele, "open");
 } else {
 removeClass(ele, "open");
 }
}

//Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function() {
 if (document.readyState === "complete") {
 init();
 }
});
   $(function() { 
	var ele = document.getElementsByTagName('body')[0];   
      $(".swipe-area").swipe( {
        //Single swipe handler for left swipes
        swipeRight:function(event, direction, distance, duration, fingerCount) {
          addClass(ele, "open");
        },
		 swipeLeft:function(event, direction, distance, duration, fingerCount) {
          removeClass(ele, "open");
        },
		
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
      });
	  $("#menu").swipe( {
        //Single swipe handler for left swipes
       
		 swipeLeft:function(event, direction, distance, duration, fingerCount) {
          removeClass(ele, "open");
        },
		
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
      });
    });
