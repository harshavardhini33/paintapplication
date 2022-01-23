function change_color(element){
    hyyh=element.style.background;
}
function myClickEvent(e){
    var message;
    ctx.beginPath();
    if (shape == 0){
        ctx.arc(e.offsetX, e.offsetY, 20, 0, 2* Math.PI);
        ctx.strokeStyle = hyyh;
        ctx.linewidth = 2;
    } else if (shape == 1){
        ctx.rect(e.offsetX, e.offsetY, 35,35);
        ctx.strokeStyle = hyyh;
        ctx.linewidth = 2;
    } else if (shape == 2){
        ctx.moveTo(e.offsetX, e.offsetY);
        ctx.lineTo(e.offsetX+(t/2), e.offsetY-(t*0.86602));
        ctx.lineTo(e.offsetX-(t/2), e.offsetY-(t*0.86602));
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.strokeStyle = hyyh;
        ctx.linewidth = 2;
    } else if (shape == 3){
        ctx.rect(e.offsetX, e.offsetY, 70, 35);
        ctx.strokeStyle = hyyh;
        ctx.linewidth = 2;
    } else if (shape == 4){
        ctx.moveTo(e.offsetX, e.offsetY);
        ctx.lineTo(e.offsetX, e.offsetY-(s/2));
        ctx.strokeStyle = hyyh;
        ctx.linewidth = 2;
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
