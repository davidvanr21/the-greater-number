console.log("Hello world")

// function myFunction() {
//   var x = document.getElementById("menu");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


// img movement on mousemove
// reference video: https://www.youtube.com/watch?v=ysF0rFjIk7o

let imgArr = document.querySelectorAll(".img");
let prevX = 0;
let prevY = 0;
let moveXAmount = 0;
let moveYAmount = 0;

document.addEventListener("mousemove", function(e){
    mousePos(e);
})

function mousePos(e){
    moveXAmount = e.pageX - prevX;
    moveYAmount = e.pageY - prevY;

    moveImg(moveXAmount, moveYAmount);

    prevX = e.pageX;
    prevY = e.pageY;
}

function moveImg(xAmount, yAmount){

    imgArr.forEach(function(img){
        let movementStrength = 5 + (Math.random() * 15);

        img.style.left = (img.offsetLeft) - (xAmount/movementStrength) + "px";
        img.style.top = (img.offsetTop) - (yAmount/movementStrength) + "px";
    })
}

// World map animation
var animation = lottie.loadAnimation({
    container: document.getElementById('worldMap'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'worldmapBlueZones3.json'
})