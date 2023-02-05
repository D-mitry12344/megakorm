let eggs = document.querySelector("#eggs");
let science = document.querySelector("#science");
let korms = document.querySelector("#korms");
let blockSev = document.querySelector(".blockSeven");
function createBtn(){
  if(window.innerWidth < 1000){
  	liFirst.innerHTML=`
  		<div style="position: absolute;
	margin-top: 650px; margin-left:-30px;">
					<image id="sevBtnRev" class="blockTwoBut blockTwoButRev" src="img/Subtract.png"></image>
					<image id="sevBtn" class="blockTwoBut" src="img/Subtract.png"></image>	
				</div>	`
  	blockSev.prepend(liFirst);
  }
}
createBtn();
let sevBtnRev = document.querySelector("#sevBtnRev");
let sevBtn = document.querySelector("#sevBtn");
let masArt =[eggs,science,korms]
let q =0;
sevBtn.onclick = transitionArticle;
function transitionArticle(){
	if(q>=0){
		if(q==0){masArt[q].style.display= "none";
	let i =	1;
	masArt[i].style.display= "block";}
	
	
	if(q>=1){
		if(q==1){masArt[q].style.display= "none";
	let i =	2;
	masArt[i].style.display= "block";}
		if(q==2){
			masArt[q].style.display= "none";
			let i =	0;
			masArt[i].style.display= "block";
			
	
		}
		
		
	}
	}
	if(q<2 || q==2){
		q++;
	}
	if(q>2 ){
		q=0;
	}
}
sevBtnRev.onclick = transitionArticleRev;
function transitionArticleRev(){
	
		if(q==0){masArt[q].style.display= "none";
				let i =	2;
				masArt[i].style.display= "block";
			}
	
	
	
		if(q==1){masArt[q].style.display= "none";
			let i =	0;
			masArt[i].style.display= "block";
		}
		if(q==2){
			masArt[q].style.display= "none";
			let i =	1;
			masArt[i].style.display= "block";
			
	
		
		
		
	
	}
	if(q>0 || q==0){
		q = q-1;
	}
	if(q<0 ){
		q=2;
	}
}
	