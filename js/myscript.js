var imageAr1 = ["website-images-assets/Cantor atrium 3.jpg", "website-images-assets/IMG_1808.jpeg", "website-images-assets/main_2529_image4.png"]






function chgImage () {
    document.getElementById("indeximg").setAttribute("src", imageAr1[imgCounter]);
    imgCounter++;
    if (imgCounter == imageAr1.length){
        imgCounter = 0;
    }
    console.info("Called")

}

var imgCounter = 0

setInterval(chgImage, 2000);