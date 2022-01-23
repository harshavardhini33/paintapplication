# Web Page for Paint Application

## AIM:

To design a static website for Paint Application using HTML5 canvas.

## DESIGN STEPS:

### Step 1:

Requirement collection.

### Step 2:

Creating the layout using HTML,CSS and canvas.

### Step 3:

Write javascript to capture move events.

### Step 4:

Perform the drawing operation based on the user input.

### Step 5:

Validate the layout in various browsers.

### Step 6:

Validate the HTML code.

### Step 6:

Publish the website in the given URL.

## PROGRAM :

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paint Application</title>

    <style>
        *{
   box-sizing: border-box; 
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body{
    background-image: url("/static/img/bgimg5.png");
    background-size: cover;
}

h1{
    color: rgb(90, 12, 51);
    text-align: center;
    padding-top: 15px;
}

.container{
    width: 1080px;
    margin-left: auto;
    margin-right: auto;
}

canvas{
    background-color: rgb(238, 229, 216);
    box-shadow: inset 0 0 5px #c1b2c5;
    backdrop-filter: blur(15px);
    border-radius: 10px;
    border: 1px solid #ffffff;
}

.newshape{
    background-color: #e7ccb6;
    border: 2px solid rgb(189, 163, 142);
    border-radius: 25px;
    color: rgb(90, 37, 12);
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
}

.footer{
    text-align: center;
    color: rgb(42, 12, 90);
    text-align: center;
    font-size: x-large;
}

#cypher{
    border: 2px solid #ffffff;
    border-radius: 30px;
    padding: 25px 25px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
    </style>


    <script type="text/javascript">
        function change_color(element){
    choose=element.style.background;
}
function myClickEvent(e){
    var message;
    ctx.beginPath();
    if (shape == 0){
        ctx.arc(e.offsetX, e.offsetY, 20, 0, 2* Math.PI);
        ctx.strokeStyle = choose;
        ctx.linewidth = 5;
    } else if (shape == 1){
        ctx.rect(e.offsetX, e.offsetY, 35,35);
        ctx.strokeStyle = choose;
        ctx.linewidth = 5;
    } else if (shape == 2){
        ctx.moveTo(e.offsetX, e.offsetY);
        ctx.lineTo(e.offsetX+(t/2), e.offsetY-(t*0.86602));
        ctx.lineTo(e.offsetX-(t/2), e.offsetY-(t*0.86602));
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.strokeStyle = choose;
        ctx.linewidth = 5;
    } else if (shape == 3){
        ctx.rect(e.offsetX, e.offsetY, 70, 35);
        ctx.strokeStyle = choose;
        ctx.linewidth = 5;
    } else if (shape == 4){
        ctx.moveTo(e.offsetX, e.offsetY);
        ctx.lineTo(e.offsetX, e.offsetY-(s/2));
        ctx.strokeStyle = choose;
        ctx.linewidth = 5;
    }

    ctx.stroke();
}

function circleclicked() {
    shape=0;
}

function squareclicked() {
    shape=1;
}

function triangleclicked() {
    shape=2;
}

function rectclicked() {
    shape=3;
}

function lineclicked() {
    shape=4;
}
    </script>


</head>
<body>
    <h1>Paint Application</h1>
    <div class="container">
        <div class="content">
            <canvas id="myCanvas" width="1050" height="650"></canvas>
        </div>
        <br/>
        <center>
            <input type="button" class="newshape" id="circle" value="Circle">
            <input type="button" class="newshape" id="square" value="Square">
            <input type="button" class="newshape" id="triangle" value="Triangle">
            <input type="button" class="newshape" id="rectangle" value="Rectangle">
            <input type="button" class="newshape" id="line" value="Line">
        </center>
        <br/>
        <center>
            <button onclick="change_color(this)" id="cypher" style="background: white;"></button>
            <button onclick="change_color(this)" id="cypher" style="background: rgb(243, 222, 33);"></button>
            <button onclick="change_color(this)" id="cypher" style="background: rgb(41, 38, 226);"></button>
            <button onclick="change_color(this)" id="cypher" style="background: rgb(255, 76, 165);"></button>
            <button onclick="change_color(this)" id="cypher" style="background: rgb(0, 238, 255);"></button>
            <button onclick="change_color(this)" id="cypher" style="background: rgb(189, 31, 221);"></button>
            <button onclick="change_color(this)" id="cypher" style="background: rgb(0, 0, 0);"></button>
        </center>
    </div>
    <br/>
    <center>
    <div class="footer">DEVELOPED BY HARSHA VARDHINI</div>
    </center>
    <script type="text/javascript">
        var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
shape=0;
let choose="#000000";
let t=50;
let s=120;
ctx.beginPath();
ctx.stroke();
c.addEventListener("click", myClickEvent);
document
.getElementById("circle")
.addEventListener("click", circleclicked);
document
.getElementById("square")
.addEventListener("click", squareclicked);
document
.getElementById("triangle")
.addEventListener("click", triangleclicked);
document
.getElementById("rectangle")
.addEventListener("click", rectclicked);
document
.getElementById("line")
.addEventListener("click", lineclicked);
    </script>
    
</body>
</html>

## OUTPUT:

![har](./harshu.png)

## Result:

Thus a website is designed and validated for paint application using HTML5 canvas.
