// let birdImgs=["imgs/1.gif","imgs/2.gif","imgs/3.gif"];
// console.log(birdImgs[1]);
var images = ['1.gif','2.gif','3.gif'];
var container = document.querySelector('.container');

function createImageNode() {
    var imgs = document.createElement('img');
    imgs.src = images;
    imgs.width = "300";
    imgs.style.margin = "15px";
     return img;
}
for(var i = 0; i < images; i++){
    container.appendChild(createImageNode());
};