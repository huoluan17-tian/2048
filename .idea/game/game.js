//监听键盘按下事件
$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 37://left
            //moveleft()方法完成向左移动
            if(moveLeft()){
                //移动之后生成一个随机数字
                generateOneNumber();
                //判断移动完成之后游戏是否结束
                isgameover();
            }
            break;
        case 38://向上
            if(moveTop()){
                generateOneNumber();
                isgameover();
            }
            break;
        case 39://向右
            if(moveRight()){
                generateOneNumber();
                isgameover();
            }
            break;
        case 40://向下
            if(moveDown()){
                generateOneNumber();
                isgameover();
            }
            break;
        default:
            break;
    }
})


function moveLeft() {
    //不可以移动
    if(!canMoveLeft(board)){
        return fasle;
    }
    //向左移动
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(board[i][j]!=0){
                //向左移动的逻辑
                for(var k=0;k<j;k++){
                   if(board[i][k]==0 && noBlockHorizontalCol(i,k,j,board)){
                      showMoveAnimation(i,j,i,k);
                      board[i][k]=board[i][j];
                       board[i][j]=0;
                       continue;
                   } else if(board[i][k]==board[i][j] && noBlockHorizontalCol(i,k,j,board)&&!hasConflicted[i][k]){

                       showMoveAnimation(i,j,i,k);
                       board[i][k] += board[i][j];
                       board[i][j]=0;
                        score+=board[i][k];
                        updateScore(score);
                       hasConflicted[i][k]=true;
                       continue;
                   }
                }
            }

        }
    }
   setTimeout("updateBoardView();",200);
    return true;
}

//向上
function moveTop() {
    if(!canMoveTop(board)){
        return fasle;
    }

    for(var i=1;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]!=0){
                //向上移动的逻辑  board[k][j]==0,并且与当前值之间值都为0 或者值相等中间值都为0
                for(var k=0;k<i;k++){
                    if(board[k][j]==0 && noBlockHorizontalRow(i,k,j,board)){
                        showMoveAnimation(i,j,k,j);
                        board[k][j]=board[i][j];
                        board[i][j]=0;
                        continue;
                    } else if(board[k][j]==board[i][j] && noBlockHorizontalRow(i,k,j,board)&&!hasConflicted[k][j]){

                        showMoveAnimation(i,j,i,k);
                        board[k][j] += board[i][j];
                        board[i][j]=0;
                        score+=board[k][j];
                        updateScore(score);
                        hasConflicted[k][j]=true;
                        continue;
                    }
                }
            }

        }
    }
    setTimeout("updateBoardView();",200);
    return true;
}

//向右
function moveRight() {
    if(!canMoveRight(board)){
        return fasle;
    }

    for(var i=0;i<4;i++){
        for(var j=0;j<3;j++){
            if(board[i][j]!=0){
                //向右移动的逻辑  board[i][k]==0,并且与当前值之间值都为0 或者值相等中间值都为0
                for(var k=3;k>j;k--){
                    if(board[i][k]==0 && noBlockHorizontalCol(i,j,k,board)){
                        showMoveAnimation(i,j,i,k);
                        board[i][k]=board[i][j];
                        board[i][j]=0;
                        continue;
                    } else if(board[i][k]==board[i][j] && noBlockHorizontalCol(i,j,k,board)&&!hasConflicted[i][k]){

                        showMoveAnimation(i,j,i,k);
                        board[i][k] += board[i][j];
                        board[i][j]=0;
                        score+=board[i][k];
                        updateScore(score);
                        hasConflicted[i][k]=true;
                        continue;
                    }
                }
            }

        }
    }
    setTimeout("updateBoardView();",200);
    return true;
}

//向下
function moveDown() {
    if(!canMoveDown(board)){
        return fasle;
    }

    for(var i=0;i<3;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]!=0){
                //向上移动的逻辑  board[k][j]==0,并且与当前值之间值都为0 或者值相等中间值都为0
                for(var k=3;k>i;k--){
                    if(board[k][j]==0 && noBlockHorizontalRow(k,i,j,board)){
                        showMoveAnimation(i,j,k,j);
                        board[k][j]=board[i][j];
                        board[i][j]=0;
                        continue;
                    } else if(board[k][j]==board[i][j] && noBlockHorizontalRow(k,i,j,board)&&!hasConflicted[k][j]){

                        showMoveAnimation(i,j,k,j);
                        board[k][j] += board[i][j];
                        board[i][j]=0;
                        score+=board[k][j];
                        updateScore(score);
                        hasConflicted[k][j];
                        continue;
                    }
                }
            }

        }
    }
    setTimeout("updateBoardView();",200);
    return true;
}

function isgameover() {
    if(nospace(board)&&nomove(board)){
        gameover();
    }
}

function gameover() {
    alert("gameover!")

}