let r=2;
let k =1 ;
let a=0;
let selectReg = document.querySelector("#selectReg");  
const mepReg = function(){
    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center:mar.mapCoors[r].Coors,
            zoom: mar.mapCoors[r].zoom,
            controls: ['trafficControl']
        }, {
            searchControlProvider: 'yandex#search'
        }),
    trafficControlObj = myMap.controls.get('trafficControl');
    trafficControlObj.options.set('size', 'small');

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div id="girya" style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
             balloonContent: "ИП:" +mar.mapCoors[r].Client+'<br>'+
                "Номер:" +mar.mapCoors[r].phoneNumber+'<br>'+
                "регион:" +mar.mapCoors[r].region+'<br>'+
                "город:" +mar.mapCoors[r].cityTitle+'<br>'+
                "адрес:"+ mar.mapCoors[r].adress,
            hintContent: mar.mapCoors[r].Client
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            //iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [-5, -38]
        }),

         myPlacemar = new ymaps.Placemark(mar.mapCoors[k].Coors, {
             balloonContent: "ИП:" +mar.mapCoors[k].Client+'<br>'+
                "Номер:" +mar.mapCoors[k].phoneNumber+'<br>'+
                "регион:" +mar.mapCoors[k].region+'<br>'+
                "город:" +mar.mapCoors[k].cityTitle+'<br>'+
                "адрес:"+ mar.mapCoors[k].adress,
            hintContent: mar.mapCoors[k].Client
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
        }),

        myPlacemarkWithContent = new ymaps.Placemark(mar.mapCoors[a].Coors, {
            balloonContent: "ИП:" +mar.mapCoors[a].Client+'<br>'+
                "Номер:" +mar.mapCoors[a].phoneNumber+'<br>'+
                "регион:" +mar.mapCoors[a].region+'<br>'+
                "город:" +mar.mapCoors[a].cityTitle+'<br>'+
                "адрес:"+ mar.mapCoors[a].adress,
            hintContent: mar.mapCoors[a].Client
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            //iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            //iconImageOffset: [-5, -38]
        });
        myMap.controls.add('searchControl', {
    // Расположим поисковую строку справа.
    float: 'right',
    // Включим возможность искать организации.
    provider: 'yandex#search'
});
    myMap.controls.add('zoomControl', {
    size: 'small',
    float: 'none',
     backgroundImage: "img/max.png",
    position: {
        bottom: '50px',
        right: '30px'
    }
});
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent)
        .add(myPlacemar)
});
}
selectReg.oninput = function(){ 
   if(selectReg.value === "Астрахань"){
        r=0;
        k= 1 ;
        a= 2;
        mepReg();
        console.log(1);
   
   };
   if(selectReg.value === 'Белгород'){
        r=1;
        k =2 ;
        a=0;
        mepReg();
        console.log(2);
   }
    if(selectReg.value === 'Брянск'){
        r=2;
        k =0 ;
        a=1;
        mepReg()
        console.log(3)
   }
} 