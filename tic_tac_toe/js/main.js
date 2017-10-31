$(document).ready(function() {
    console.log( "ready!" );
});

var player1 ='X'
var player2='0'
var currentPlayer = player1


$('td').on('click', function () {
    console.log(this.innerHTML)
    if (this.innerHTML.length<1) {
      $(this).html(currentPlayer);
      nextPlayer();
    } else{
      alert("This space is taken. Try again.")
    }
});

function nextPlayer(){
  console.log ("current player"+currentPlayer)
  if (currentPlayer===player1){
    currentPlayer=player2;
  }else{
    currentPlayer=player1;
  }
}
// var winning=[
//   ['#one', '#two', '#three'],
//   ['#four', '#five', '#six'],
//   ['#seven','#eight','#nine'],
//   ['#one','#four','#seven'],
//   ['#two','#five','#eight'],
//   ['#three','#six','#nine'],
//   ['#one','#five','#nine'],
//   ['#three','#five','#seven']
// ]
