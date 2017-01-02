function showSlides() {
  console.log("Show Slides");
}


document.getElementById('frame').innerHTML =  
  '<div><img src="images/' + slides[2] + '"></div><div><img src="images/' + slides[1] + '"></div><div><img src="images/' + slides[0] + '"></div>';
document.getElementById("frame").style.marginLeft = "-600px";
console.log("Start " + slides[1]);

var leftClick = document.querySelector('.back');
var rightClick = document.querySelector('.forward');

leftClick.addEventListener('click', moveBack);
rightClick.addEventListener('click', moveForward);

function moveBack() {
  document.getElementById('frame').innerHTML =  
  '<div><img src="images/' + slides[2] + '"></div><div><img src="images/' + slides[1] + '"></div><div><img src="images/' + slides[0] + '"></div>';

  console.log("Start Backwards " + slides[1]);
  var id = setInterval(frame, 1);
  var left = -600;
  function frame() {
    if (left > -301) {
      clearInterval(id);
    } else {
      left = left + 2;
      document.getElementById("frame").style.marginLeft = (left) + "px";
    }
  };
  var temp = slides.pop();
  slides.unshift(temp);
  document.getElementById("frame").style.marginLeft = "-600px";
  console.log("Finish Backwards" + slides[1]);
  console.log(slides);
}

function moveForward () {
  console.log("Start Forward " + slides[1]);
  var id = setInterval(frame, 1);
  var right = -300;
  function frame() {
    if (right < -600) {
      clearInterval(id);
    } else {
      right = right -2;
      document.getElementById("frame").style.marginLeft = (right) + "px";
    }
  };
  var temp = slides.shift();
  slides.push(temp);
  document.getElementById('frame').innerHTML =  
  '<div><img src="images/' + slides[2] + '"></div><div><img src="images/' + slides[1] + '"></div><div><img src="images/' + slides[0] + '"></div>';
  console.log("Finish Forward " + slides[1]);
  console.log(slides);
};



