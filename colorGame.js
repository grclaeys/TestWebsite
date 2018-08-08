//var colors = ["rgb(255, 0, 0)",
//"rgb(255, 255, 0)",
//"rgb(0, 255, 0)",
//"rgb(0, 255, 255)", //picked
//"rgb(0, 0, 255)",
//"rgb(255, 0, 255)"];
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");
var numberOfSquares = 6;

init();

modeButtons[1].classList.add("selected");
function init(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
    for(var i = 0; i < squares.length; i++ ){
        squares[i].style.backgroundColor = colors[i];
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab clicked color
            var clickedColor = this.style.backgroundColor;
            //compare clicked color to pickedColor
            //
            //Right Color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "correct";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
                //wrong color
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

colorDisplay.textContent = pickedColor;


function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors"
    h1.style.backgroundColor = 'steelblue';
    //change square color
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }

    }
}

resetButton.addEventListener("click", function(){
    reset();
});



function changeColors(color){
    //loop thru all squares and change to match pickedColor
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

//not in colors?
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make arr
    var arr = [];
    //add num random colors
    for(var i = 0; i < num; i++){
        //arr[i] = randomColor();
        arr.push(randomColor());
        //get random color and push into arr
    }
    return arr;
}

function randomColor(){
    //pick a "red" fromm 0-255 
    var r = Math.floor(Math.random() * 256);
    //"green"
    var g = Math.floor(Math.random() * 256);
    //"blue"
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}
