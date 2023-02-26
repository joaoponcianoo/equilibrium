const imageHover = document.getElementById("card-image");
const imageView  = document.getElementById("card-image-view");

imageHover.addEventListener("mouseenter", () => {
    imageView.style.display = "block";
    imageHover.style.opacity = "0.5";
})

imageView.addEventListener("mouseenter", () => {
    imageView.style.display = "block";
    imageHover.style.opacity = "0.5";
})

imageHover.addEventListener("mouseout", () => {
    imageView.style.display = "none";
    imageHover.style.opacity = "1";
})
