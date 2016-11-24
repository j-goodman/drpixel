var pixelClick = function (event) {
  var color;
  if (event.shiftKey) {
    color = document.getElementById('second-color');
    this.style.background = color.value;
    this.hexval = color.value;
  } else if (event.ctrlKey || event.altKey) {
    color = document.getElementById('third-color');
    this.style.background = color.value;
    this.hexval = color.value;
  } else {
    color = document.getElementById('color');
    this.style.background = color.value;
    this.hexval = color.value;
  }
};

var logAsMatrix = function (width, height) {
  var i; var matrix = [];
  var display = document.getElementById('display');
  var pixels = display.childNodes;
  for (i=0 ; i<height ; i++) {
    matrix.push([]);
  }
  for (i=0 ; i<pixels.length ; i++) {
    matrix[Math.floor(i/width)][i%width] = pixels[i].hexval ? pixels[i].hexval : '';
  }
  console.log(JSON.stringify(matrix));
};

var loadPixels = function (width, height, unit) {
  var x; var y; var pixel;
  var display = document.getElementById('display');
  for (y=0 ; y<height ; y++) {
    for (x=0 ; x<width ; x++) {
      pixel = document.createElement('div');
      pixel.style.height = unit+'px';
      pixel.style.width = unit+'px';
      pixel.className = 'pixel';
      pixel.onclick = pixelClick;
      pixel.x = x;
      pixel.y = y;
      display.appendChild(pixel);
    }
  }
};

window.onload = function () {
  var display = document.getElementById('display');
  var width = window.prompt('Image width?');
  var height = window.prompt('Image height?');
  var unitsize = Math.round(600/height);
  window.onkeydown = function (event) {
    if (event.keyCode === 13) {
      logAsMatrix(width, height);
    }
  };
  display.style.width = unitsize*width+'px';
  display.style.height = unitsize*height+'px';
  loadPixels(width, height, unitsize);
};