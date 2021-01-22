
function rollDicesAndUpdatePage(){
  var diceNumbers = findTwoRndNumbers();
  chooseImagesWith(diceNumbers);
  gameEndMessage(diceNumbers);
}

function findTwoRndNumbers()
{
  var num1 = Math.ceil(Math.random() * 6);
  var num2 = Math.ceil(Math.random() * 6);
  return [num1, num2];
}

function chooseImagesWith(numbers)
{
  document.querySelector(".img1").setAttribute("src", "images/dice" + numbers[0] + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + numbers[1] + ".png");
}

function gameEndMessage(numbers)
{
  if(numbers[0] === numbers[1])
  {
    document.querySelector("h2").innerHTML = "Players tied! Try again...";
  }
  else if (numbers[0] > numbers[1])
  {
    document.querySelector("h2").innerHTML = "Player 1 won with " + numbers[0] + "!";
  }
  else
  {
    document.querySelector("h2").innerHTML = "Player 2 won with " + numbers[1] + "!";
  }



}
