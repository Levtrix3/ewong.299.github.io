
function getRandomImage() {
    //declare an array to store the images
    var randomImage = new Array();
    
    //insert the URL of images in array
    randomImage[0] = "../Slot_Machine/1.jpg";
    randomImage[1] = "../Slot_Machine/2.jpg";
    randomImage[2] = "../Slot_Machine/3.jpg";
    
    //generate a number and provide to the image to generate randomly
    var number = Math.floor(Math.random()*randomImage.length);
    var number2 = Math.floor(Math.random()*randomImage.length);
    var number3 = Math.floor(Math.random()*randomImage.length);

    if (number == "../Slot_Machine/1.jpg" && number2 == "../Slot_Machine/2.jpg" && number3 == "../Slot_Machine/3.jpg") {
        playMeow();
        
    } else {
        playHiss();
    }
    
    //return the images generated by a random number
    document.getElementById("item1").innerHTML = '<img src="'+ randomImage[number] +'" style="width:150px" />'; 
    document.getElementById("item2").innerHTML = '<img src="'+ randomImage[number2] +'" style="width:150px" />'; 
    document.getElementById("item3").innerHTML = '<img src="'+ randomImage[number3] +'" style="width:150px" />'; 
    return

    
    
    function playMeow() {
        const meow = document.getElementById("meow")
        meow.play();
    }
    function playHiss() {
        const hiss = document.getElementById("hiss")
        hiss.play();
    }
}












