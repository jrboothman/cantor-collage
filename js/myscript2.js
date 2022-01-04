var imagear2 = ["website-images-assets/IMG_0170.jpeg", "website-images-assets/ACES-032-Computing-Playstation-Lab.jpg", 
"website-images-assets/Cantor Lecture Theatre 3.jpg", "website-images-assets/cantor-gallery.jpg"]



function chgImage () {
    document.getElementById("facilitiesimg").setAttribute("src", imagear2[imgCounter]);
    imgCounter++;
    if (imgCounter == imagear2.length){
        imgCounter = 0;
    }
    console.info("Called")

}

var imgCounter = 0

setInterval(chgImage, 2000);