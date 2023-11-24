class Ball {
    constructor(ctx, x, y, radius, dx, dy) {
        this.ctx = ctx;
        this.x = x; 
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

class Paddle {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = "#0095DD8";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

class Brick {
    constructor(ctx, x, y, width, height) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.status = 1;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = "#0095DD";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

class Game {
    constructor(canvasid) {
        this.canvas = document.getElementById(canvasid);
        this.ctx = this.canvas.getContext("2d");
    }
}
