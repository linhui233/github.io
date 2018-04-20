//各种参数(可以封装到同一个全局变量中)
const WIDTH = 1900;
const HEIGHT = 1080;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;
const endDate = new Date(2018,3,22,12,00,00);//第二个数从0开始
var restTime = 0;
const colors = ['#ffffff','#ffffff','#000000','#000000'];
var balls = [];
window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    restTime = calDate();
    //定时器，1000/50 = 20帧
    setInterval(function(){
        render(context);
        update();
    }, 50);
    
}
function addBalls(x, y, num) {
    for(var i=0;i<digit[num].length;i++){
        for(var j=0;j<digit[num][i].length;j++){
            if(digit[num][i][j] == 1){
                var aBall = {
                    x:x+j*2*(RADIUS+1)+(RADIUS+1),
                    y:y+(i+1)*(RADIUS+1),
                    g: 1.5+Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random()*1000)) *4,
                    vy: -5,
                    color: colors[Math.floor(Math.random()*colors.length)]
                }
                balls.push(aBall)
            }
        }
    }
}
//更新动画
function update(){
    restTime = calDate();
    var hours = parseInt( restTime / 3600);
    var minutes = parseInt( (restTime - hours * 3600)/60 )
    var seconds = restTime % 60
    addBalls( MARGIN_LEFT + 0 , MARGIN_TOP , parseInt(hours/10) );
    addBalls( MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP , parseInt(hours/10) );

    addBalls( MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP , parseInt(minutes/10) );
    addBalls( MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP , parseInt(minutes%10) );

    addBalls( MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP , parseInt(seconds/10) );
    addBalls( MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP , parseInt(seconds%10) );

    for(var i=0;i<balls.length;i++){
        balls[i].x +=balls[i].vx;
        balls[i].y +=balls[i].vy;
        balls[i].vy +=balls[i].g;
    }


}
//计算剩余时间
function calDate() {
    var curDate = new Date();
    restTime = endDate.getTime() - curDate.getTime();
    restTime = Math.round(restTime/1000);
    return restTime>0?  restTime : 0;
}
//渲染
function render(ctx) {
    var hours = parseInt( restTime / 3600);
    var minutes = parseInt( (restTime - hours * 3600)/60 )
    var seconds = restTime % 60

    ctx.clearRect(0,0,WIDTH,HEIGHT);
    renderDigit( MARGIN_LEFT , MARGIN_TOP , parseInt(hours/10) , ctx )
    renderDigit( MARGIN_LEFT + 15*(RADIUS+1) , MARGIN_TOP , parseInt(hours%10) , ctx )
    renderDigit( MARGIN_LEFT + 30*(RADIUS + 1) , MARGIN_TOP , 10 , ctx )
    renderDigit( MARGIN_LEFT + 39*(RADIUS+1) , MARGIN_TOP , parseInt(minutes/10) , ctx);
    renderDigit( MARGIN_LEFT + 54*(RADIUS+1) , MARGIN_TOP , parseInt(minutes%10) , ctx);
    renderDigit( MARGIN_LEFT + 69*(RADIUS+1) , MARGIN_TOP , 10 , ctx);
    renderDigit( MARGIN_LEFT + 78*(RADIUS+1) , MARGIN_TOP , parseInt(seconds/10) , ctx);
    renderDigit( MARGIN_LEFT + 93*(RADIUS+1) , MARGIN_TOP , parseInt(seconds%10) , ctx);

    for(var i=0;i<balls.length;i++){
        ctx.fillStyle = balls[i].color;
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, RADIUS ,0 ,2*Math.PI, true);
        ctx.closePath();
        ctx.fill();
    }
}
//渲染的主函数,调取点阵
function renderDigit(x,y,num,ctx) {
    ctx.fillStyle = "rgb(0,102,153)";
    for(var i=0; i<digit[num].length; i++){
        for(var j=0; j<digit[num][i].length; j++){
            if(digit[num][i][j] === 1){
                ctx.beginPath();
                ctx.arc(x +j*2*(RADIUS+1) + RADIUS+1, y+i*2*(RADIUS+1)+RADIUS+1, RADIUS,0,2*Math.PI)
                ctx.closePath();
                ctx.fill();
            }
        }
    }
}
