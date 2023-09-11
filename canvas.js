
/*ctx.lineWidth =5;//size del borde canvas
ctx.strokeStyle = "#378";//color de la linea del cambas
ctx.strokeRect(50,30, 400,200);//hace una caja let,top, width, heigth
ctx.fillStyle = '#392'; // color de la caja
ctx.fillRect(40,20,400,200); // tama;ana de la caja con color
ctx.lineTo( 100,300); // un punto para unir
ctx.lineTo(120, 350 ); // un punto para unir
ctx.lineTo(140  ,300);

ctx.stroke(); // une los puntos
ctx.closePath();// termina la linea
ctx.beginPath();// para iniciar otra linea y otros puntos
ctx.lineTo(200, 350);
ctx.lineTo(200, 390);
ctx.lineTo(240, 390);
ctx.stroke();
ctx.arc(120, 150, 100,20,30); //circulo
ctx.stroke();*/

const canvas = document.getElementById('canvas');

const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext('2d');

let painting , color, lineWidth, difX, difY;

canvas.addEventListener('mousedown',(e)=>{
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    console.log(e.clientX);

    painting = true;
    color =  document.getElementById('color').value;
    lineWidth = document.getElementById('lw').value;
    ctx.beginPath();
})

canvas.addEventListener('mousemove', e=>{
    if(painting){
    dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
    difX = e.clientX - dif.left;
    difY = e.clientY - dif.top;
    }
})

canvas.addEventListener('mouseup' , ()=>{
    ctx.closePath();
    painting =false;
})

const dibujar = (x1,y1, x2, y2)=>{
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
}