var randonNumber1= Math.floor(Math.random() * 6)+1;
var randonNumber2= Math.floor(Math.random() * 6)+1;

var images1 = "images/dice" + randonNumber1 + ".png";
var images2 = "images/dice" + randonNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", images1);
document.querySelector(".img2").setAttribute("src", images2);

if(randonNumber1>randonNumber2){
   document.querySelector("h1").innerHTML=("🚩Player 1 won!")

}
else if (randonNumber1<randonNumber2) {

   document.querySelector("h1").innerHTML=("Player 2 won!🚩")
}
else if (randonNumber1===randonNumber2) {
     document.querySelector("h1").innerHTML=("Draw!")
}
