

function keyPressed() {
  //Programe que 'se keyCode for igual à DOWN_ARROW
  ??? {
    //Utilize o código que cria um objeto da bola de canhão
    var cannonBall = ???(cannon.x, cannon.y);
    //Utilize o código 'push' para que as bolas de canhão sejam adicionadas na variável 'cannonBall'
    balls.???(cannonBall);
  }
}

//função para exibir a bala
function showCannonBalls(ball) {
  //Utilize o código que irá mostrar a bola na tela
  ???

}


//Crie a função 'keyReleased'
???{
  if (keyCode === DOWN_ARROW) { 
    balls[balls.length - 1].shoot();
  }
}


