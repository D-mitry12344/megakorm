
let blockTwo = document.querySelector("#blockTwo");
var x = 0;
blockTwo.onmousedown= function(){
	if(blockTwo.onmouseup != null){
		console.log(123)
	}
	if(blockTwo.onmousedown != null){
		blockTwo.onmousemove= function(e){
		var target = this.getBoundingClientRect();
		x = e.clientX - target.left;
		var y = e.clientY - target.top;
			if(x >= '521' && x< '510'){
				for(let i = 0 ; i< masAnim.length ; i++){
					if(masAnim[i].checked == true){
						let p = +i - 1;
						if(p == '-1'){
							p = 7;
						}
						masAnim[p].checked = true;
						transformMas(masAnim[p])
						break;
				
					}
				}
			
			};
			if(x <= '521' && x> '510'){
				for(let i =0 ; i< masAnim.length ; i++){
					if(masAnim[i].checked == true){
						let p = +i + 1;
						if(	p == 8){
							p = 0;	
						}
						masAnim[p].checked = true;
						transformMas(masAnim[p])
						break;
				
					}
				}
			
			};

		}
	};
}


function transformMas(anim){
	if(anim.checked == true){
		textLabel.style.top= "470px";
		textLabel.style.left = "120px";
		infoH1.textContent = anim.texts.h1;
		infoP1.textContent =anim.texts.p1;
		infoP2.textContent =anim.texts.p2;
		animal.src = anim.texts.img1;
		corm.src = anim.texts.img2;
		label.src = anim.texts.img3;
		textLabel.src="";
		if(anim == duck){
			textLabel.src="img/duck/textLabel.png"
		};
		if(anim == chickenLay){
			corm.style.left="250px";
			animal.style.top="100px"
			textLabel.src="img/chickLay/textLabel.png"
		}
		if(anim == cow){
			textLabel.src="img/cow/textLabel.png";
			textLabel.style.top="520px"
			textLabel.style.left="150px"
		}
		pathVal.attributes[1].value = anim.texts.fill;
		
	}
}

but.onclick = function() {
	for(let i =0 ; i< masAnim.length ; i++){
		if(masAnim[i].checked == true){
			let p = +i + 1;
			if(	p == 8){
				p = 0;	
			}
			masAnim[p].checked = true;
			transformMas(masAnim[p])
			break
		}
	}
};

butRev.onclick = function() {
	for(let i = 0 ; i< masAnim.length ; i++){
		if(masAnim[i].checked == true){
			let p = +i - 1;
			if(p == '-1'){
				p = 7;
			}
			masAnim[p].checked = true;
			transformMas(masAnim[p])
			break;
		}
	}
};
 