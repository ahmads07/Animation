function moveDivToMiddle() {
    // window size of my browser
    h = window.innerHeight;
    myDiv = document.getElementById("animalPictures");

    // the top of my divider will be half of my screen
    myDiv.style.top = h/2+"px";
}

function mouseOnPicture(e) {
    e.style.height="150px";
    switch (e.id) {
        case "bird":
            sound = new Audio("Sound/birds.mp3");
            sound.play();
            break
        case "cow":
            sound = new Audio("Sound/cow.mp3");
            sound.play();
            break
        case "crickets":
            sound = new Audio("Sound/crickets.mp3");
            sound.play();
            break
        case "horse":
            sound = new Audio("Sound/horse.mp3");
            sound.play();
            break
    }
}

function mouseLeavePicture(e) {
    e.style.height="50px";
    sound.pause();
}