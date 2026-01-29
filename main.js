let header = document.querySelector(".header");

// get array of images
let imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

setInterval(() => {
    // get random number
    let rondomNember = Math.floor(Math.random() * imageArray.length);
    //change backgrounImage
    header.style.backgroundImage = 'url("./images/' + imageArray[rondomNember] + '")';

}, 1000);

// start header

// end header
/*******************start section*/
let productContainer = document.querySelectorAll(".product-container");
let nextBtn = document.querySelectorAll(".nxt-btn");
let preBtn = document.querySelectorAll(".pre-btn");


productContainer.forEach((item, i) => {
        let container = item.getBoundingClientRect();
        let containerWidth = container.width;

        nextBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        });
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        });
    })
    /*end section*************************/