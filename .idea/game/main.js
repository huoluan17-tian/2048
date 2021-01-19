//定义一个二维数组
var board=new Array();
var hasConflicted=new Array();
let score=0;

$(function () {
    newgame();
});
function newgame() {
    //初始化棋盘格
    init();
    //生成两个随机位置的随机数字
    generateOneNumber();
    generateOneNumber();
}

function init() {
    for(var i=0;i<4;i++){
        board[i]=new Array();
        for(var j=0;j<4;j++){
            //初始化小格子的值为0
            board[i][j]=0;
            var girdCell=$("#grid-cell-"+i+"-"+j);
            girdCell.css("top",getPosTop(i,j));
            girdCell.css("left",getPosLeft(i,j));
        }
    }
    for (var i=0;i<4;i++){
        board[i]=new Array();
        hasConflicted[i]=new Array();
        for (var j=0;j<4;j++){
            board[i][j]=0;
            hasConflicted[i][j]=false;
        }
    }
    updateBoardView();
    score=0;
    $("#score").text(0);
}

function updateBoardView() {
    //单独处理的逻辑
    $(".number-cell").remove();
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            $("#grid-container").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
            var numberCell=$("#number-cell-"+i+"-"+j);
            //如果棋盘的值为0，设置数字格高宽都为0；
            if(board[i][j]==0){
                numberCell.css("width","0px");
                numberCell.css("height","0px");
                numberCell.css("top",getPosTop(i,j)+50);
                numberCell.css("left",getPosLeft(i,j)+50);
            }
            //如果棋盘格的值不为0的话，设置数字格为高宽75 并设置背景色和前景色和数字值
            else{
                numberCell.css("width","100px");
                numberCell.css("height","100px");
                numberCell.css("top",getPosTop(i,j));
                numberCell.css("left",getPosLeft(i,j));
                numberCell.css("background-color",getNumberBackgroundColor(board[i][j]));
                numberCell.css("color",getNumberColor(board[i][j]));
                numberCell.text(board[i][j]);

            }
            hasConflicted[i][j]=false;
        }
    }


}

function generateOneNumber() {
    //生成随机位置的随机数字
    //1 生成随机的位置
    var randx=parseInt(Math.floor(Math.random()*4));
    var randy=parseInt(Math.floor(Math.random()*4));
    //找到数值为0的格子
    while (true){
        if(board[randx][randy]==0){
            break;
        }
        var randx=parseInt(Math.floor(Math.random()*4));
        var randy=parseInt(Math.floor(Math.random()*4));
    }
    //2 生成随机的数字 2或4
    var randNumber=Math.random()<0.5?2:4;

    //3 在随机的位置上显示随机的数字
    board[randx][randy]=randNumber;
    //实现随机数字显示的动画
    ShowNumberWithAnimation(randx,randy,randNumber);
}
