'use strict';
function loadItems() {
	return fetch('../data/data.json') //response > body > ReadableStream 들어있다.
		.then(function (a) {
			return a.json();
		})
		.then(function (a) {
			return a.items;
		});
}
function displayItems(a) {
	//받아온 items 데이터를 html 요소로 변환한다.
	var b = document.querySelector('.item__list');
	b.innerHTML = a
		.map(function (a) {
			return createHTMLString(a);
		})
		.join('');
}
function createHTMLString(a) {
	//스트링 템플릿
	return '<li class="item">\n    <img src="' + a.image + '" alt="' + a.type + '" class="item__thumbnail">\n    <span class="item__description">' + a.gender + ', ' + a.size + '</span></li>';
}
function onButtonClick(a, b) {
	var c = a.target.dataset,
		d = c.key,
		e = c.value; //이벤트 위임
	if (null != d && null != e) {
		// 필터로 배열을 뽑아낸다.
		var f = b.filter(function (a) {
			return a[d] === e;
		});
		console.log(f), displayItems(f);
	}
}
function setEventListeners(a) {
	console.log(a);
	var b = document.querySelector('.logo'),
		c = document.querySelector('.category__buttons'); //이벤트 위임 : 하나하나의 이벤트를 등록하는것보다 같은 컨테이너에 이벤트를 리스터를 등록한다.
	b.addEventListener('click', function () {
		return displayItems(a);
	}),
		c.addEventListener('click', function (b) {
			return onButtonClick(b, a);
		});
} //main
loadItems()
	.then(function (a) {
		console.log(a), displayItems(a), setEventListeners(a);
	})
	.catch(console.log);
