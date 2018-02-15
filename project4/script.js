function likedog () {
  document.getElementById("petfood").src="assets/dog.png"
  document.getElementById("pedigree-text").innerHTML="canine"
}

function likecat () {
  document.getElementById("petfood").src="assets/cat.png"
  document.getElementById("pedigree-text").innerHTML="feline"
}

function glutentext () {
  document.getElementById("hagentext").innerHTML="Classic flavors reimagined with gluten free ingredients."
}

function milktext () {
  document.getElementById("hagentext").innerHTML="Timeless flavors made with wholesome dairy."
}

function likeflash () {
  document.getElementById("netflixlogo").src="assets/flashlogo.png"
  document.getElementById("netflixtext").innerHTML="On Netflix now."
  document.getElementById("three").style.background="radial-gradient(#940000,#ff9100)"
  document.getElementById("netflixtext").style.color="white"
}

function likegotham () {
  document.getElementById("netflixlogo").src="assets/gothamlogo.png"
  document.getElementById("netflixtext").innerHTML="On Netflix now."
  document.getElementById("three").style.background= "radial-gradient(hsl(0, 0%, 30%), black)"
  document.getElementById("netflixtext").style.color="white"

}
