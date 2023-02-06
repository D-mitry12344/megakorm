let selNav = document.createElement("div");
let headerBlock =document.querySelector("header");
function createSelector(){
  if(window.innerWidth < 1000){
  	selNav.innerHTML=`
  		<img id="btnUl" style="position:absolute; margin-left:330px;"src="img/selNav.png" />
  		<ul class="selNav">
  			<li id="btn-1"><a href="#blockTwo">наши корма</a></li>
  			<li id="btn-2"><a href="#blockFour">калькулятор</a></li>
  			<li id="btn-3"><a href="#">как купить</a></li>
  			<li id="btn-4"><a href="#blockFive">о нас</a></li>
  			<li id="btn-5"><a href="#blockSeven">полезные статьи</a></li>
  		</ul>
  		`
  	headerBlock.prepend(selNav);
  }
 }
 createSelector();

let btnUl =document.querySelector("#btnUl");
let headUl =document.querySelector(".selNav");
let selCheck = false
btnUl.onclick = animUl;
function animUl(){
	if(selCheck == false){
		btnUl.style.transform="rotate(90deg)"
		headUl.style.display="block";
		selCheck = true;
	}else{
		selCheck = false
		btnUl.style.transform="rotate(0deg)"
		headUl.style.display="none";
	}

}

/*transition-property: background-color;
  transition-duration: 3s;*/