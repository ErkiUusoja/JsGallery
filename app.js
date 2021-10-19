const currentImage = document.querySelector('#image');
const images = ['images/pilt1.jpeg','images/pilt2.jpeg','images/pilt3.jpeg'];

function changeImage() {
    console.log('Hello from script file.');

    let randomNumber = Math.floor(Math.random() * images.length);

    console.log(images[randomNumber]);

    currentImage.src = images[randomNumber];

}