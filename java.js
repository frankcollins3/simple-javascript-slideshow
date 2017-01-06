/* 
My initial approach for this project is to totally 
manage the images in Javascript. User can enter image file 
names into opening script of HTML doc. 

At any given time, Javascript is passing along three images to the DOM. 
The "current", "previous," and "next" image. Each time the slider moves
the array is updated as well as the images that are being 
passed along to the DOM.
*/ 

updateSlides();
document.getElementById("frame").style.marginLeft = "-1800px";
//console.log("Start " + slides[1]);

var clickBack = document.querySelector('.arrow-prev');
var clickForward = document.querySelector('.arrow-next');

clickBack.addEventListener('click', moveBack);
clickForward.addEventListener('click', moveForward);

/* upDate slides is the function that updates the DOM with the three 
active images at any given time. */

function updateSlides() {
  document.getElementById('frame').innerHTML =  
  '<div class="slidewrapper"><div class="spanwrapper">' + slides[2]['caption'] + '</div><img src="images/' + slides[2]['fileName'] + '"></div><div class="slidewrapper"><div class="spanwrapper">' + slides[1]['caption'] + '</div><img src="images/' + slides[1]['fileName'] + '"></div><div class="slidewrapper"><div class="spanwrapper">' + slides[0]['caption'] + '</div><img src="images/' + slides[0]['fileName'] + '"></div>';
}


/* Moves images in array backward One */
function updateArrayBack() {
  var temp = slides.pop();
  slides.unshift(temp);
}

/* Moves images in array forward One */
function updateArrayForward () {
  var temp = slides.shift();
  slides.push(temp);
}

/* Animates the slideshow backwards */
function moveBack() {
  updateSlides();
  //console.log("Start Backwards " + slides[1]);
  var id = setInterval(frame, 1);
  var left = -1200;
  function frame() {
    if (left > -601) {
      clearInterval(id);
    } else {
      left = left + 2;
      document.getElementById("frame").style.marginLeft = (left) + "px";
    }
  };
  updateArrayBack() 
  document.getElementById("frame").style.marginLeft = "-600px";
  //console.log("Finish Backwards" + slides[1]);
  //console.log(slides);
}

/* Animates the slideshow forwards */
function moveForward () {
  console.log("Start Forward " + slides[1]);
  var id = setInterval(frame, 1);
  var right = -600;
  function frame() {
    if (right < -1200) {
      clearInterval(id);
    } else {
      right = right -2;
      document.getElementById("frame").style.marginLeft = (right) + "px";
    }
  };
  updateArrayForward ();
  updateSlides();

  //console.log("Finish Forward " + slides[1]);
  //console.log(slides);
};



