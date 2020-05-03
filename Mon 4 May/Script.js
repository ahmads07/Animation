function showAlert() {
    // We will use alert and console.log for debugging
    // alert("Hello World");
    // console.log("Hello world in console");

    // setTimeout is used to pause the actions
    setTimeout(function () {
        alert("Hello World");
        console.log("Hello world in console");
    }, 3000);
}

function showLoop() {
    // setInterval is used to loop animation or functions in javascript
    setInterval(function () {
        alert("Hello World from loop");
        console.log("Hello world in loop");
    },  3000);
}

function moveImage() {
    image = document.getElementById("movingImg");
    x = 10; //left
    y = 10; //top
    speed = Number(document.getElementById("speedInput").value);

    // create a function in loop and loop it each half second
    setInterval(function () {
        x=x+speed;
        y=y+speed;
        console.log("x=",x); //debugging code
        console.log("y=",y); //debugging code:
        image.style.left=x+"px";
        image.style.top=y+"px";
    }, 500);
}