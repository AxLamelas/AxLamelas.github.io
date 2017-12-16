let i = 0;
let images = ["imagens/grav-waves.jpg","imagens/luz.png","imagens/musica.jpg","imagens/navier.jpg"]
let time = 3000;
let slide = document.querySelector(".slide");


function changeImg(){
    slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;