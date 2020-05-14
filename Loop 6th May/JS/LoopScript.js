function calculateSum() {
    sum = 0; //my sum starts from 0, later on I add numbers
    number = Number(document.getElementById("numFrom").value); //my number starts from 1, this number will count the number of my loop
    while (number<= Number(document.getElementById("numTo").value) ) { //my condition is number less equal to 50
        //actions
        sum = sum + number; //on the 'left' of = is variable, on the 'right' of = is valuable
        console.log("number: " + number + "sum: " + sum); //we need to print them out as a string hence the plus sign before the number
        number = number + 1; //add one on number, in order to update my condition
    }
    document.getElementById("sumResult").innerText = sum;
}

function goNextStep() {
    inputText = document.getElementById("userInput").value;
    if (inputText != "yes"){
        alert("type again");
    }else {
        alert("type correctly");
    }
}