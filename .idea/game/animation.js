function ShowNumberWithAnimation(i,j,randNumber) {
    //获取当前的数字格
    var numberCell=$("#number-cell-"+i+"-"+j);
    //设置当前数字格的背景色和前景色和数字值
    numberCell.css("background-color",getNumberBackgroundColor(randNumber));
    numberCell.css("color",getNumberColor(randNumber));
    numberCell.text(randNumber);
    numberCell.animate({
        width:"100px",
        height:"100px",
        top:getPosTop(i,j),
        left:getPosLeft(i,j)

    },50)//50毫秒
}

function showMoveAnimation(fromx,fromy,tox,toy) {
    var numberCell=$("#number-cell-"+fromx+"-"+fromy);
    numberCell.animate({
        top:getPosTop(tox,toy),
        left:getPosLeft(tox,toy)
    },200);
}

function updateScore(score) {
    $("#score").text(score);
}