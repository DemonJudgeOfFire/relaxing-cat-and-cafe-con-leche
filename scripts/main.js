let my_image = document.querySelector("img");

my_image.onclick = function() {
    let my_src = my_image.getAttribute("src");
    if(my_src === "images/cat_coffee.jpg") {
        my_image.setAttribute("src", "images/pexels-marko-blazevic-774731.jpg");
    } else {
        my_image.setAttribute("src", "images/cat_coffee.jpg")
    }
}