const density = `Ñ@#W$9876543210?!abc;:+=-,._                 `;

// let cat;
let video;
let asciiDiv;
// function preload() {
//   cat = loadImage("pngwing.com.png");
// }
function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(2 * 64, 2 * 36);
  asciiDiv = createDiv();
}

function draw() {
  //   background(0);
  //   image(cat, 0, 0, width, height);
  //   let w = width / cat.width;
  //   let h = height / cat.height;
  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      let avg = (r + g + b) / 3;

      //       noStroke();
      //       fill(255);
      //       //       square(i * w, j * h, w);
      const len = density.length;
      const charIndex = Math.floor(map(avg, 0, 255, len, 0));
      const c = density.charAt(charIndex);
      //       console.log(c);
      if (c == " ") {
        console.log(true);
        asciiImage += "&nbsp;";
      } else asciiImage += c;
      //       row += density.charAt(charIndex);

      //       textSize(w);
      //       textAlign(CENTER, CENTER);
      //       text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
    }
    //     console.log(row);
    asciiImage += `<br/>`;
  }
  asciiDiv.html(asciiImage);
}
function vidLoad() {
  //   video.loop();
  video.play();
  video.volume(100);
}
