'use strict';

{
    function rect(ctx){
        // 四角を描画
        ctx.fillStyle = 'pink';
        ctx.strokeStyle = '#f00';
        // ctx.lineWidth = 8;
        // ctx.lineJoin = 'round';
        // ctx.lineJoin = 'bevel';
        ctx.fillRect(50, 50, 50, 50);
        ctx.strokeRect(50, 50, 50, 50);
        
        ctx.fillStyle = 'skyblue';
        ctx.strokeStyle = '#00b';
        
        ctx.fillRect(70, 70, 50, 50);
        ctx.strokeRect(70, 70, 50, 50);
    }

    function gradation(ctx){
        //グラデーション
        const g = ctx.createLinearGradient(0, 0, canvas.width, 0);
        g.addColorStop(0, '#f00');
        g.addColorStop(0.3, '#0f0');
        g.addColorStop(1, '#00f');
        
        ctx.fillStyle = g;
        
        ctx.fillRect(0, 0, 600, 240);
    }

    function dropsdw(ctx){
        // 影を落とす
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
        ctx.fillRect(50, 50, 50, 50);
    }

    function drowline(ctx){
        // 線を書く
        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(100, 50);
        ctx.lineTo(100, 100);
        ctx.closePath();
        // ctx.stroke();
        ctx.fill();
    }
    
    function linestyle(ctx){
        ctx.beginPath();
        ctx.moveTo(100, 50);
        ctx.lineTo(200, 50);
        ctx.setLineDash([5, 10]);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(200, 100);
        ctx.setLineDash([]);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100, 150);
        ctx.lineTo(200, 150);
        ctx.lineWidth = 16;
        ctx.lineCap = 'round';
        ctx.stroke();
    }

    function circle(ctx){
        ctx.beginPath();
        // ctx.arc(100, 100, 50, 0, 2 * Math.PI);
        // ctx.arc(100, 100, 50, 0, 300 / 360 * 2 * Math.PI);
        ctx.moveTo(100, 100);
        ctx.arc(100, 100, 50, 0, 300 / 180 * Math.PI, true);
        // ctx.stroke();
        ctx.fill();
    }

    function drawEllipse(ctx){
        ctx.ellipse(100, 100, 50, 30, 0, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function drawText(ctx, canvas){
        ctx.beginPath();
        ctx.moveTo(0, 100);
        ctx.lineTo(canvas.width, 100);
        ctx.moveTo(100, 0);
        ctx.lineTo(100, canvas.height);
        ctx.stroke();

        ctx.font = 'bold 64px Verdana';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'top';
        // ctx.fillText('Tokyo', 100, 100);
        ctx.strokeText('Tokyo', 100, 100, 100);
    }

    let t = 0;

    function charactar(ctx,canvas){
        ctx.beginPath();
        ctx.ellipse(100, 100, 40, 30, 0, 0, 2 * Math.PI);
        ctx.fillStyle = 'black';
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(80 + Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
        ctx.ellipse(120 + Math.sin(t / 30), 100, 8, 8, 0, 0, 2 * Math.PI);
        ctx.fillStyle = 'skyblue';
        ctx.fill();
        
        t++;
        setTimeout(draw, 10);
    }

    function resolution(ctx, canvas){
        const CANVAS_WIDTH = 600;
        const CANVAS_HEIGHT = 240;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = CANVAS_WIDTH * dpr;
        canvas.height = CANVAS_HEIGHT * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = CANVAS_WIDTH + 'px';
        canvas.style.height = CANVAS_HEIGHT + 'px';
        
        ctx.font = 'bold 48px Verdana';
        ctx.strokeText('Tokyo', 100, 100);
    }

    function draw(){
        const canvas = document.querySelector('canvas');
        if(typeof canvas.getContext === 'undefined'){
            return;
        }
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        resolution(ctx, canvas);
    }

    draw();
}