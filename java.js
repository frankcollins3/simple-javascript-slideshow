
// The visible slide at start will be the slide
// with the index of 1
var activeSlide = 1;
console.log(slides);
var captionVisible = true;

timVar = 1;

displayCenterSlide();

var clickNext = document.querySelector('.arrow-next');
var clickPrev = document.querySelector('.arrow-prev');

clickNext.addEventListener('click', moveNext);
clickPrev.addEventListener('click', movePrev);

function displayCenterSlide() {
  document.getElementById('slides').classList.add('animate');

  if (captionVisible == true) {
    document.getElementById('active-slide').innerHTML = '<div class="caption">' + slides[activeSlide]['caption'] + '</div><img src="images/' + slides[activeSlide]['fileName'] + '">';
    document.getElementById('left-slide').innerHTML = '<div class="caption">' + slides[activeSlide - 1]['caption'] + '</div><img src="images/' + slides[activeSlide - 1]['fileName'] + '">';  
  } else {
    document.getElementById('active-slide').innerHTML = '<div class="hide-caption">No Caption Visible</div><img src="images/' + slides[activeSlide]['fileName'] + '">';
    document.getElementById('left-slide').innerHTML = '<div class="hide-caption">' + slides[activeSlide - 1]['caption'] + '</div><img src="images/' + slides[activeSlide - 1]['fileName'] + '">';  
  }
  document.getElementById('right-slide').innerHTML = '<div class="caption">' + slides[activeSlide + 1]['caption'] + '</div><img src="images/' + slides[activeSlide + 1]['fileName'] + '">';
  document.getElementById('active-slide').children[0].classList.add('up');
}

function moveNext () {
  document.getElementById('slides').classList.remove('animate-none');
  document.getElementById('active-slide').children[0].classList.add('move-down');
  setTimeout(function(){ 
    document.getElementById('slides').classList.add('move-left'); 
  }, 1000);
  setTimeout(function(){ 
    updateArrayForward ();
    document.getElementById('active-slide').innerHTML = '<div class="caption down">' + slides[activeSlide]['caption'] + '</div><img src="images/' + slides[activeSlide]['fileName'] + '">';
    //console.log(slides[activeSlide]['caption'] + ' and ' + slides[activeSlide]['fileName']);
  }, 2000);
  if (slides[activeSlide + 1]['caption'].length == 0) {
    captionVisible = false;
  } else {
    captionVisible = true;
  };
  setTimeout(function(){ 
    if (captionVisible == false) {
      document.getElementById('active-slide').children[0].classList.remove('caption');
    }
    document.getElementById('active-slide').children[0].classList.add('move-up');
  }, 2100);
  setTimeout(function(){ 
    document.getElementById('slides').classList.remove('animate');
    document.getElementById('slides').classList.add('animate-none');
    document.getElementById('slides').classList.remove('move-left');
    displayCenterSlide();
  }, 2800); 
}

function movePrev () {
  document.getElementById('slides').classList.remove('animate-none');
  document.getElementById('active-slide').children[0].classList.add('move-down');
  setTimeout(function(){ 
    document.getElementById('slides').classList.add('move-right'); 
    
  }, 1000);
  setTimeout(function(){ 
    updateArrayBack();
    document.getElementById('left-slide').innerHTML = '<div class="caption down-left">' + slides[activeSlide]['caption'] + '</div><img src="images/' + slides[activeSlide]['fileName'] + '">';
  }, 3000);
  if (slides[activeSlide - 1]['caption'].length == 0) {
    captionVisible = false;
  } else {
    captionVisible = true;
  };
  setTimeout(function(){ 
    if (captionVisible == false) {
      document.getElementById('left-slide').children[0].classList.renive('caption');
      document.getElementById('left-slide').children[0].classList.add('hide-caption');
    }
    document.getElementById('left-slide').children[0].classList.add('move-up-left');
  }, 3100);

  setTimeout(function(){ 
    document.getElementById('slides').classList.remove('animate');
    document.getElementById('slides').classList.add('animate-none');
    document.getElementById('slides').classList.remove('move-right');
    displayCenterSlide();
  }, 3800); 
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