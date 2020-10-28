'use strict';//배열로 옷리스트 (오브젝트나 클래스 이용) 배열에 정의되어져 있는 옷들을 html 에 보여준다.
var clothes=[{sort:'tshirts',color:'blue',gender:'male',size:'large',img:'blue_t'},{sort:'Pants',color:'blue',gender:'man',size:'large',img:'blue_p'},{sort:'skirts',color:'blue',gender:'female',size:'large',img:'blue_s'},{sort:'tshirts',color:'pink',gender:'male',size:'large',img:'pink_t'},{sort:'Pants',color:'pink',gender:'man',size:'large',img:'pink_p'},{sort:'skirts',color:'pink',gender:'female',size:'large',img:'pink_s'},{sort:'tshirts',color:'yellow',gender:'male',size:'large',img:'yellow_t'},{sort:'Pants',color:'yellow',gender:'man',size:'large',img:'yellow_p'},{sort:'skirts',color:'yellow',gender:'female',size:'large',img:'yellow_s'}],btns=document.querySelectorAll('.category__buttons button'),itemList=document.querySelector('.item__list'),itemLi=document.querySelectorAll('li');//노드를 변수에 저장
//2.printList 안에 생성하는 부분 따로 함수 추출
function printList(){event.preventDefault();var a=event.target,b=a.dataset.value;//초기화
//sort가 있는경우만
console.log(a,b),itemList.innerHTML='',clothes.forEach(function(a){b!==a.sort&&b!==a.color||//클릭한 종류가 같으면 노드 생성
createItem(a)})}//버튼 루프 하여 클릭이벤트 생성
btns.forEach(function(a){a.addEventListener('click',printList)}),clothes.forEach(function(a){createItem(a)});function createItem(a){var b=document.createElement('li'),c=document.createElement('img'),d=document.createElement('p');c.src='images/'+a.img+'.png',d.innerText=a.gender+','+a.size+' size',b.appendChild(c),b.appendChild(d),itemList.appendChild(b)}//순서가 맞는지
//전체보여지는노드추가 부분과 클릭후 일어나는 부분이 반복되어집니다. 해결방법이 있을까요?