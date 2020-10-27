function loadItems() {
	return (
		fetch('../data/data.json')
			//response > body > ReadableStream 들어있다.
			.then((response) => response.json())
			.then((json) => json.items)
	);
}
function displayItems(items) {
	//받아온 items 데이터를 html 요소로 변환한다.
	const container = document.querySelector('.item__list');
	container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

function createHTMLString(item) {
	//스트링 템플릿
	return `<li class="item">
    <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
    <span class="item__description">${item.gender}, ${item.size}</span></li>`;
}
function onButtonClick(event, items) {
	const dataset = event.target.dataset;
	const key = dataset.key;
	const value = dataset.value;
	//이벤트 위임
	if (key == null || value == null) {
		return;
	}
	// 필터로 배열을 뽑아낸다.

	const filtered = items.filter((item) => item[key] === value);
	console.log(filtered);

	displayItems(filtered);
}

function setEventListeners(items) {
	console.log(items);
	const logo = document.querySelector('.logo');
	const buttons = document.querySelector('.category__buttons');
	//이벤트 위임 : 하나하나의 이벤트를 등록하는것보다 같은 컨테이너에 이벤트를 리스터를 등록한다.

	logo.addEventListener('click', () => displayItems(items));
	buttons.addEventListener('click', (event) => onButtonClick(event, items));
}
//main
loadItems()
	.then((items) => {
		console.log(items);

		displayItems(items);
		setEventListeners(items);
	})
	.catch(console.log);
