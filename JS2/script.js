let platno = document.getElementById("platno");
let kontext = platno.getContext("2d");
let stredKruhuX = 100;
let stredKruhuY = 100;

platno.onmousemove = Ben;

function Ben (event) {
    stredKruhuX = event.clientX;
    stredKruhuY = event.clientY;
}

function nakresli (){
    kontext.clearRect(0,0,700,700);
    kontext.beginPath();
    kontext.arc(stredKruhuX,stredKruhuY, 50,0,Math.PI * 2);
    kontext.fillStyle = "blue"
    kontext.fill();
    kontext.fillStyle = "green"
    kontext.fillRect(200,200,100,100)
    console.log(checkRectCircleCollision(200,200,100,100,stredKruhuX, stredKruhuY, 50));
    if(checkRectCircleCollision){
        
    }
    requestAnimationFrame(nakresli)
}

nakresli()

function checkRectCircleCollision(Rx,Ry,Rw,Rh, Cx,Cy,Cr) {
    let x = Cx;
    let y = Cy;
    if (x < Rx) x = Rx;
    else if (x > Rx + Rw) x = Rx + Rw;
    if (y < Ry) y = Ry;
    else if (y> Ry + Rh) y = Ry+ Rh;
    x -= Cx;
    y -= Cy;
    
    return x * x + y * y < Cr * Cr;
}