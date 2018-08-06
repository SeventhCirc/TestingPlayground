function canvasManager() {
    var canvas = document.querySelector("canvas");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var c = canvas.getContext('2d');
    c.backgroundColor = "#ffffff";
    let bubbleArray = [];

    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }

    }

    for (let i = 0; i < 500; i++) {
        let x = Math.round(Math.random() * window.innerWidth);
        let y = Math.round(Math.random() * window.innerHeight);
        let dx = Math.random() - 0.5 * 0.01;
        let dy = Math.random() - 0.5 * 0.01;
        let size = Math.round(Math.random() * 60);
        let thickness = Math.floor(Math.random() * 3);
        let color = randomColor();
        bubbleArray.push(new Bubble(c, x, y, dx, dy, size,thickness, color))
    }
    animate();
}


function Bubble(c, x, y, dx, dy, size, thickness, color) {
    this.x = Math.floor(x);
    this.y = Math.floor(y);
    this.dx = dx;
    this.dy = dx;
    this.size = size;
    this.color = color;
    this.thickness = thickness;
    
    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.lineWidth= this.thickness;
        c.stroke();
    }
    
    this.update = function () {
        if (this.x + this.size > innerWidth || this.x - this.size < 0){
            this.dx = -this.dx;
        }

        if (this.y + this.size > innerWidth || this.y - this.size < 0){
            this.dy = -this.dy;
        }

        Math.round(this.x += this.dx);
        Math.round(this.y += this.dy);

        this.draw()

    }

    
}

function randomColor() {
    let number = Math.random();
    let colorvalue;
    
    if ((number >= 0.33) && (number <= 0.66 )){
        colorvalue = "#60b4f4";
    } 
    
    if (number <= .33 ){
        colorvalue = "#97e6ff";
    }

    if (number >= .66 ){
        colorvalue = "#1985c1";
    }
    
    return colorvalue;
}

