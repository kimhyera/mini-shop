//배열로 옷리스트 (오브젝트나 클래스 이용) 배열에 정의되어져 있는 옷들을 html 에 보여준다.
const clothes = [
	{
		sort: 'tshirts',
		color: 'blue',
		gender: 'male',
		size: 'large',
		img: 'blue_t',
	},

	{
		sort: 'Pants',
		color: 'blue',
		gender: 'man',
		size: 'large',
		img: 'blue_p',
	},

	{
		sort: 'skirts',
		color: 'blue',
		gender: 'female',
		size: 'large',
		img: 'blue_s',
	},

	{
		sort: 'tshirts',
		color: 'pink',
		gender: 'male',
		size: 'large',
		img: 'pink_t',
	},

	{
		sort: 'Pants',
		color: 'pink',
		gender: 'man',
		size: 'large',
		img: 'pink_p',
	},

	{
		sort: 'skirts',
		color: 'pink',
		gender: 'female',
		size: 'large',
		img: 'pink_s',
	},

	{
		sort: 'tshirts',
		color: 'yellow',
		gender: 'male',
		size: 'large',
		img: 'yellow_t',
	},

	{
		sort: 'Pants',
		color: 'yellow',
		gender: 'man',
		size: 'large',
		img: 'yellow_p',
	},

	{
		sort: 'skirts',
		color: 'yellow',
		gender: 'female',
		size: 'large',
		img: 'yellow_s',
	},
];

//노드를 변수에 저장
const btns = document.querySelectorAll('.category__buttons button');
const itemList = document.querySelector('.item__list');
const itemLi = document.querySelectorAll('li');

//2.printList 안에 생성하는 부분 따로 함수 추출

function printList() {
	event.preventDefault();

	const target = event.target;
	const sort = target.dataset.value;

	console.log(target, sort);

	itemList.innerHTML = ''; //초기화
	//sort가 있는경우만
	clothes.forEach(function (ele, i) {
		if (sort !== ele.sort && sort !== ele.color) {
			return;
		}
		//클릭한 종류가 같으면 노드 생성

		createItem(ele);
	});
}

//버튼 루프 하여 클릭이벤트 생성
btns.forEach(function (button) {
	button.addEventListener('click', printList);
});

//전체 보이기
clothes.forEach(function (ele) {
	createItem(ele);
});

function createItem(ele) {
	const li = document.createElement('li');
	const img = document.createElement('img');
	const p = document.createElement('p');
	img.src = `images/${ele.img}.png`;
	p.innerText = `${ele.gender},${ele.size} size`;

	li.appendChild(img);
	li.appendChild(p);
	itemList.appendChild(li);
}

//순서가 맞는지
//전체보여지는노드추가 부분과 클릭후 일어나는 부분이 반복되어집니다. 해결방법이 있을까요?
