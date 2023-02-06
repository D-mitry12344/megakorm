let selNav = document.createElement("div");
let headerBlock =document.querySelector("header");
function createSelector(){
  if(window.innerWidth < 1000){
  	selNav.innerHTML=`
  		<div id="tegUl"><img id="btnUl" style="position:absolute; margin-left:330px; "src="img/selBtn.png" />
  		<img id="btnUl2" style="position:absolute; margin-left:330px; margin-top:10px;"src="img/selBtn.png" />
  		<img id="btnUl3" style="position:absolute; margin-left:330px; margin-top:20px;"src="img/selBtn.png" />
  		</div>
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
let btnUl2 =document.querySelector("#btnUl2");
let btnUl3 =document.querySelector("#btnUl3");
let tegUl =document.querySelector("#tegUl")
let headUl =document.querySelector(".selNav");
let selCheck = false
tegUl.onclick = animUl;
function animUl(){
	if(selCheck == false){
		btnUl.style.transform="rotate(225deg)";
		btnUl.style.marginTop="10px";
		btnUl2.style.transform="rotate(135deg)";
		btnUl3.style.transform="rotate(135deg)";
		btnUl3.style.marginTop="10px";
		headUl.style.display="block";
		selCheck = true;
	}else{
		selCheck = false
		btnUl.style.transform="rotate(0deg)";
		btnUl2.style.transform="rotate(0deg)";
		btnUl3.style.transform="rotate(0deg)"
		headUl.style.display="none";
		btnUl3.style.marginTop="20px";
		btnUl.style.marginTop="0px";
	}

}

/*transition-property: background-color;
  transition-duration: 3s;*/