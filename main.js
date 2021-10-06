function changeImage(width) {
    var image = document.getElementById("bilden");
    var imageSrc = image.getAttribute("src");
    console.log(imageSrc)
    if (imageSrc == "Image/Component 3.png") {
        image.setAttribute("src", "Image/linkedin.png")
    }
    else
    {
        image.setAttribute("src", "Image/Component 3.png")
    }
}