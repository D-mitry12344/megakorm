let blockThred = document.querySelector(".blockThreed")
let divFirst = document.createElement('div');
let infoFive = document.querySelector(".infoBlockFive p");
let infoSeven = document.querySelector(".headerBlock p");
let pigger =document.querySelector("#pigger");
let headerWap = document.querySelector(".headerWap")
function createBlocks(){
  if(window.innerWidth < 1000){
    pigger.attributes[7].nodeValue ="./img/mobilePig.png"
    infoFive.textContent=`Кормовая компания «МЕГАМИКС» — крупнейший российский производитель премиксов
       и комбикормов для всех видов сельскохозяйственных животных и птиц.
        Сегодня «МЕГАМИКС» ставит перед собой более высокие требования к безопасности и качеству выпускаемой продукции,
        поддержанию деловой репутации, чем это определено в российском законодательстве и принято на рынке.`
    infoSeven.innerHTML=`Мы собрали полезные статьи, схемы кормления и другие материалы, которые помогут вам добиться луших результатов.<br><br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.`;
    divFirst.innerHTML =`<div id="bidThreed" style="display: flex;
                                  position:absolute;
                                  width:100px;
                                  margin-top:370px;
                                  margin-left:50px;
                                  z-index:1;
                                   ">
            <div class="radio" style="margin:0px;">
                <input " class="custom-radio" type="radio" id="block1" name="blocks" value="1">
                <label for="block1"></label>
              </div>
             <div class="radio" style="margin:0px;">
                <input class="custom-radio" style="margin:10px" type="radio" id="block2" name="blocks" value="2">
                <label for="block2"></label>
              </div>
            <div class="radio" style="margin:0px;">
                <input class="custom-radio" type="radio" id="block3" name="blocks" value="3">
                <label for="block3"></label>
              </div>
            <div class="radio" style="margin:0px;">
                <input class="custom-radio" type="radio" id="block4" name="blocks" value="4">
                <label for="block4"></label>
              </div>
            <div class="radio" style="margin:0px;">
                <input class="custom-radio" type="radio" id="block5" name="blocks" value="5">
                <label for="block5"></label>
              </div>
            <div class="radio" style="margin:0px;">
                <input class="custom-radio" type="radio" id="block6" name="blocks" value="6">
                <label for="block6"></label>
              </div>         
          </div>`;
  blockThred.prepend(divFirst);
  }
}
createBlocks();
let block1 =document.querySelector('#block1');
let block2 =document.querySelector('#block2');
let block3 =document.querySelector('#block3');
let block4 =document.querySelector('#block4');
let block5 =document.querySelector('#block5');
let block6 =document.querySelector('#block6');
let blockPig =document.querySelector("#blockPig");
let blockChick =document.querySelector("#blockChick");
let blockCow =document.querySelector("#blockCow");
let blockRab =document.querySelector("#blockRab");
let blockBirds =document.querySelector("#blockBirds");
let blockDuck =document.querySelector("#blockDuck");
let bildThreed = document.querySelector("#bidThreed")
let masBlocks =[block1, block2, block3 ,block4, block5 ,block6]
block1.onclick = transitionBlocks;
block2.onclick = transitionBlocks;
block3.onclick = transitionBlocks;
block4.onclick = transitionBlocks;
block5.onclick = transitionBlocks;
block6.onclick = transitionBlocks;
function transitionBlocks(){
    for(let i =0 ;i<masBlocks.length ; i++){
      blockPig.style.display="none";
      blockCow.style.display="none";
      blockRab.style.display="none";
      blockChick.style.display="none";
      blockBirds.style.display="none";
      blockDuck.style.display="none";
      bildThreed.style.marginTop="350px"
      if(this == masBlocks[0]){
        blockPig.style.display="block";
      }
      if(this == masBlocks[1]){
        blockPig.style.display="none";
        blockChick.style.display = "block"
        bildThreed.style.marginTop="370px"
      }
      if(this == masBlocks[2]){
        blockPig.style.display="none";
        blockCow.style.display = "block";
        bildThreed.style.marginTop="430px"
      }
      if(this == masBlocks[3]){
        blockPig.style.display="none";
        blockRab.style.display = "block"
        bildThreed.style.marginTop="50px"
      }
      if(this == masBlocks[4]){
        blockPig.style.display="none";
        blockBirds.style.display = "block"
      }
      if(this == masBlocks[5]){
        blockPig.style.display="none";
        blockDuck.style.display = "block"
      }
    }
  

}