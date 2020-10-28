# mini-shop

## 스택(기술)
HTML, CSS, JAVASCRIPT


## 주요기능
<pre>
1.스크립트를 이용하여 동적으로 아이템을 보여준다. 

2.logo클릭시전체 데이터 불러온다.

3.버튼클릭시 필터링하여 데이터 불러온다.
</pre>


## Screen Shot 

## 메인, 필터링 
![main](https://user-images.githubusercontent.com/22594993/97378484-c379c380-1905-11eb-91e2-039c81c0b72e.png)
![filter](https://user-images.githubusercontent.com/22594993/97378488-c4aaf080-1905-11eb-9292-506b8a667ac1.png)


## js 코드 리뷰
### 클릭시 이벤트 위임 vs 버튼 루프로 클릭 비교

### 텍스트 스트링과 innerHtml vs 개별 생성하여 append 비교 

<pre> append의 경우에는 요소의 개수만큼 만들어 매번 할당을 하는 방식이고,
innerHTML은 노드를 직렬화하여 개수만큼 만들어 한 번 할당하는 방식이므로 innerHTML이 더 빠른 속도로 수행됩니다
</pre>

### fecth ie 크로스 브라우징 

<pre><script src=https://cdn.jsdelivr.net/npm/promise-polyfill@8.1/dist/polyfill.min.js></script>
<script src=https://cdn.jsdelivr.net/npm/whatwg-fetch@3.0/dist/fetch.umd.min.js></script> 
</pre>
참고 링크 https://opentutorials.org/course/3281/20577



## json 로드시 
### 1. 패치 활용
<pre>function loadItems() {
	return (
		fetch('../data/data.json')
			//response > body > ReadableStream 들어있다.
			.then((response) => response.json())
			.then((json) => json.items)
	);
}</pre>

### 2. ajax (+jquery)
<pre>
$.ajax({
	type: 'GET',
	url: '../data/data.json',
	ansync: false,
	dataType: 'json',

	success: function (data) {
		var items = data.items;

		displayItems(items);
		setEventListeners(items);
	},
	error: function (xhr, status, error) {
		alert(error);
	},
}); //아작스 end
</pre>

## html 변환

### 1. forEach 
<pre>
function displayItems(items) {
	//forEach 활용
	var content = '';
	items.forEach((item) => {
		content += `<li class="item">
		<img src="${item.image}" alt="${item.type}" class="item__thumbnail">
		<span class="item__description">${item.gender}, ${item.size}</span></li>`;
	});

	itemList.innerHTML = content;
}


displayItems(items)  데이터로드된곳에서  선언한다.
</pre>



### 2. forEach 
<pre>
function displayItems(items) {
	//받아온 items 데이터를 html 요소로 변환한다.
	const container = document.querySelector('.item__list');
	//map + join 활용
    container.innerHTML = items.map((item) => createHTMLString(item)).join('');
    
    function createHTMLString(item) {
        //스트링 템플릿
        return `<li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail">
        <span class="item__description">${item.gender}, ${item.size}</span></li>`;
    }
}


displayItems(items)  데이터로드된곳에서  선언한다.

</pre>


### 3. filter 시켜 반환함
<pre>	var buttons = document.querySelectorAll('.category__buttons button');

	buttons.forEach(function (button) {
		button.addEventListener('click', function (event, ele) {
			var target = event.target;
			var key = target.dataset.key;
			var value = target.dataset.value;
			itemList.innerHTML = ''; //초기화

			var filtered = items.filter(function (item) {
				return item[key] === value;
			});

			displayItems(filtered);
		});
	});
}</pre>
