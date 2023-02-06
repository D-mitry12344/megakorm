let totalKorm  = document.querySelector("#totalMasKorm");
let numbUser = document.querySelector("#numberUser");
numbUser.oninput = function() {
	if(numbUser.value > 9999){
		numbUser.value = 9999;
	}
	if(numbUser.value == 0){
		numbUser.value = 30;
	}
	totalKorm.textContent= Math.round(numbUser.value * 5.1) +" кг корма";
}


let calcChick  = document.querySelector("#calcChick");
let calcRab  = document.querySelector("#calcRab");
let calcPig = document.querySelector("#calcPig")
let calcCow  = document.querySelector("#calcCow");
let calcRoos  = document.querySelector("#calcRooster");
let calcQuail  = document.querySelector("#calcQuail");
let calcTur = document.querySelector("#calcTurkey");
let calcDuck = document.querySelector("#calcDuck");
let imgFour = document.querySelector("#imgFour")
let calcAnim=[calcChick,calcRab,calcPig,calcCow,calcRoos,calcQuail,calcTur,calcDuck]
function animalTransform(){

	for(let i=0; i<calcAnim.length ; i++){
		calcAnim[i].style.background = 'none'
			if(this == calcAnim[i]){
				imgFour.src= "img/blockFour/"+this.id+".png"
				this.style.background = ' url("img/blockFour/wapper.png") no-repeat 0px 0px'
				this.style.backgroundSize ="cover"
			}	
	}
}		
calcRab.onclick =animalTransform;
calcRoos.onclick =animalTransform;
calcPig.onclick =animalTransform;
calcChick.onclick =animalTransform;
calcQuail.onclick =animalTransform;
calcTur.onclick =animalTransform;
calcDuck.onclick =animalTransform;
calcCow.onclick =animalTransform;