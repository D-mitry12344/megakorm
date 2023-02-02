let chickenN = document.querySelector("#chickenN");
let rabbit = document.querySelector("#rabbit");
let chickenLay = document.querySelector("#chickenLay");
let cow = document.querySelector("#cow");
let duck = document.querySelector("#duck");
let pig = document.querySelector("#pig");
let quail = document.querySelector("#quail");
let turkey = document.querySelector("#turkey");
let infoH1= document.querySelector(".infoBlockTwo h1");
let infoP1= document.querySelector(".infoOneP");
let infoP2= document.querySelector(".infoTwoP");
let label = document.querySelector('.label');
let corm = document.querySelector('.corm');
let textLabel = document.querySelector('.cormLabel');
let animal = document.querySelector('.animal');
let pathVal = document.querySelector('#animWap')
rabbit.texts={
	h1:"Комбикорм для кроликов",
	p1:`Изготовлен из отборных злаковых смесей и
		высококачественного, экологически чистого
		растительного сырья. Содержит продукты переработки 
		масличных и бобовых культур - для обогащения протеинами 
		и повышения питательности.`,
	p2:"",
	img1:"img/rabbit.png",
	img2:"img/cormRabbit.png",
	img3:"img/labelRabbit.png",
	fill:"#AA89C0"
};
chickenN.texts={
	h1:"Комбикорм для бройлеров",
	p1:`Изготовлен из отборных зерновых продуктов с высокими показателями питательности. Содержит 
		фитобиотики для повышения иммунитета и ферменты для пищеварения.`,
	p2:`«Мегакорм» обеспечивает высокую продуктивность птиц и темпы роста, 
		так как содержит весь необходимый комплекс витаминов и микроэлементов, оптимальный для бройлеров.`,
	img1:"img/chickenN.png",
	img2:"img/cormChick.png",
	img3:"img/labelChickN.png",
	fill:"#F7B86F"
};
cow.texts={
	h1:"Комбикорм для крупного рогатого скота",
	p1:`Изготовлен из отборных зерновых продуктов с высокими показателями питательности. Содержит 
		фитобиотики для повышения иммунитета и ферменты для пищеварения.`,
	p2:`«Мегакорм» обеспечивает высокую продуктивность птиц и темпы роста, 
		так как содержит весь необходимый комплекс витаминов и микроэлементов, оптимальный для бройлеров.`,
	img1:"img/cow/cow.png",
	img2:"img/cow/corm.png",
	img3:"img/cow/label.png",
	fill:"#92C9AA"
};
chickenLay.texts={
	h1:"Комбикорм для кур-несушек",
	p1:`Уникальный рецепт обеспечивает оптимальный
	 рацион для обеспечения высоких показателей надоя.
	 Изготовлен из отборных злаковых смесей и высококачественного,
	  экологически чистого растительного сырья.
	  Для обогащения протеином и повышения питательности
	  в состав добавлены продукты переработки масличных и бобовых культур.`,
	p2:`Включает все необходимые витамины, макро- и микроэлементы,
	 а также специальные добавки и органические микроэлементы,
	  укрепляющие иммунитет. Содержит `,
	img1:"img/chickLay/chick.png",
	img2:"img/chickLay/corm.png",
	img3:"img/chickLay/label.png",
	fill:"#F7B86F"
};
quail.texts={
	h1:"Комбикорм для перепелов",
	p1:`Изготовлен из качественной зерновой смеси, оптимальной для роста и здоровья перепелов.
	 За счет содержания продуктов переработки подсолнечника и сои увеличена питательность.
	  Содержит ферменты для улучшения перевариваемости корма,
	 а также натуральные каротиноиды для ярких желтков, здорового цвета кожи и привлекательного вида мяса.`,
	p2:`Содержит белки животного происхождения, макро и -микроэлементы и витамины. `,
	img1:"img/quali/quail.png",
	img2:"img/quali/corm.png",
	img3:"img/quali/label.png",
	fill:"#FFDF64"
};
turkey.texts={
	h1:"Комбикорм для индейки",
	p1:`Повышает иммунитет организма птицы к заболеваниям и укрепляет общее здоровье.
	 Изготовлен из злаковой смеси, оптимальной для потребностей индеек.
	  За счет содержания продуктов переработки подсолнечника и сои увеличена питательность.
	 Для улучшения перевариваемости корма в состав добавлены ферменты.`,
	p2:`Содержит оптимальный для индеек комплекс витаминов, микро- и макроэлементов. `,
	img1:"img//turkey/turkey.png",
	img2:"img/turkey/corm.png",
	img3:"img/turkey/label.png",
	fill:"#F585A7"
};
pig.texts={
	h1:"Комбикорм для свиней",
	p1:`Укрепляет иммунную систему животных и положительно влияет на
	 слизистую оболочку желудочно-кишечного тракта.
	  Изготовлен из качественной зерновой смеси оптимальной для усвоения организмом свиней.
	 За счет содержания продуктов переработки подсолнечника и сои увеличена питательность.`,
	p2:`Для увеличения поедаемости, в состав добавлены фитобиотики и натуральные ароматизаторы.
	 Включает в себя макро- и микроэлементы, ферменты, витамины, а также специальные добавки. `,
	img1:"img/pig/pig.png",
	img2:"img/pig/corm.png",
	img3:"img/pig/label.png",
	fill:"#F9C1C6"
};
duck.texts={
	h1:"Комбикорм для уток",
	p1:`Обеспечивает лучшие результаты по выращиванию здоровой птицы и 
	сохраняет желудочно-кишечный тракт птиц от патологий. Изготовлен из зерновых культур,
	 оптимально подобранных под особенности организма водоплавающих.
	 Высокая питательность. За счет содержания продуктов переработки подсолнечника и сои увеличена питательность.`,
	p2:`Содержит полный набор ферментов, витаминов, макро– и микроэлементов для здоровья птиц. `,
	img1:"img/duck/duck.png",
	img2:"img/duck/corm.png",
	img3:"img/duck/label.png",
	fill:"#99E1EF"
}
function transform(){
	if(this.checked == true){
		infoH1.textContent = this.texts.h1;
		infoP1.textContent =this.texts.p1;
		infoP2.textContent =this.texts.p2;
		animal.src = this.texts.img1;
		corm.src = this.texts.img2;
		label.src = this.texts.img3;
		textLabel.src="";
		if(this == duck){
			textLabel.src="img/duck/textLabel.png"
		};
		if(this == chickenLay){
			corm.style.left="250px";
			animal.style.top="100px"
			textLabel.src="img/chickLay/textLabel.png"
		}
		if(this == cow){
			textLabel.src="img/cow/textLabel.png";
			textLabel.style.top="520px"
			textLabel.style.left="150px"
		}
		pathVal.attributes[1].value = this.texts.fill
	}
}
rabbit.onclick = transform;
chickenN.onclick = transform;
chickenLay.onclick = transform;
cow.onclick = transform;
pig.onclick = transform;
quail.onclick = transform;
turkey.onclick = transform;
duck.onclick = transform;


