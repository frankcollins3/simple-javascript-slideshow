
// The visible slide at start will be the slide
// with the index of 1
var activeSlide = 1;
var captionVisible = true;

displayCenterSlide();
//startAutoForward();

var clickNext = document.querySelector('.arrow-next');
var clickPrev = document.querySelector('.arrow-prev');
var clickAuto = document.querySelector('.auto-forward');
var clickStop = document.querySelector('.stop-forward');

clickNext.addEventListener('click', moveNextCheck);
clickNext.addEventListener('mouseover', hoverRight);
clickNext.addEventListener('mouseout', offRight);
clickPrev.addEventListener('mouseover', hoverLeft);
clickPrev.addEventListener('mouseout', offLeft);
clickPrev.addEventListener('click', movePrevCheck);
clickAuto.addEventListener('click', startAutoForward);
clickStop.addEventListener('click', stopAutoForward);
clickStop.style.display = 'none';

function hoverRight() {
  document.querySelector('.arrow-next').src = 'images/arrow-next-hover.png';
}

function hoverLeft() {
  document.querySelector('.arrow-prev').src = 'images/arrow-prev-hover.png';
}

function offRight() {
  document.querySelector('.arrow-next').src = 'images/arrow-next.png';
}

function offLeft() {
  document.querySelector('.arrow-prev').src = 'images/arrow-prev.png';
}

function startAutoForward() {
  quickStart = setInterval(moveNext, 20);
  setTimeout(pause, 21);
  autoForward = setInterval(moveNext, 5000);
  clickAuto.style.display = 'none';
  clickNext.style.display = 'none';
  clickPrev.style.display = 'none';
  clickStop.style.display = 'inline';
  document.getElementById('frame').style.borderColor = "maroon";
}

function pause() {
  clearInterval(quickStart);
}

function stopAutoForward() {
  clearInterval(autoForward);
  clickAuto.style.display = 'inline';
  clickNext.style.display = 'block';
  clickPrev.style.display = 'block';
  clickStop.style.display = 'none';
  document.getElementById('frame').style.borderColor = "black";
}

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

function moveNextCheck() {
  if (autoForward = false) {
    clearInterval(autoForward);
  }
  moveNext();
}

function movePrevCheck() {
  if (autoForward = false) {
    clearInterval(autoForward);
  }
  movePrev();
}

function moveNext() {
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

function movePrev() {
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
      document.getElementById('left-slide').children[0].classList.remove('caption');
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
function updateArrayForward() {
  var temp = slides.shift();
  slides.push(temp);
}