

chickenN.checked ="true"

function transformMas(anim){
	if(window.innerWidth < 1000){
	if(anim.checked == true){
		infoBtn.style.top="1400px"
		textLabel.style.top= "335px";
		textLabel.style.left = "50px";
		infoH1.textContent = anim.texts.h1;
		infoP1.textContent =anim.texts.p1;
		infoP2.textContent =anim.texts.p2;
		animal.src = anim.texts.img1;
		corm.src = anim.texts.img2;
		label.src = anim.texts.img3;
		textLabel.src="";
		if(anim == duck){
			textLabel.src="img/duck/textLabel.png";
			label.style.height="150px";
			textLabel.style.top="315px"

		};
		if(anim == chickenLay){
			/*corm.style.left="250px";
			animal.style.top="100px"*/
			label.style.height="150px";
			textLabel.style.width="110px";
			textLabel.style.top="315px"
			infoBtn.style.top="1430px"
			textLabel.src="img/chickLay/textLabel.png"
		}
		if(anim == cow){
			textLabel.src="img/cow/textLabel.png";
			/*textLabel.style.top="520px"
			textLabel.style.left="150px"*/
			infoBtn.style.top="1450px"
		}
		pathVal.attributes[1].value = anim.texts.fill;
		
	}
}}

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

infoBtn.onclick = function() {
	tab.style.display = "block";
}

tabBtn.onclick = function() {
	tab.style.display = "none";
}