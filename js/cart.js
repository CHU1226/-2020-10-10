// JavaScript Document

var vm = new Vue({
	el: "#app",
	data: {
		events: [
			{
				title: '創意饅頭製作',
				content: '挑戰你的創意與手做能力，用不同食材與顏色，打造獨一無二的卡通饅頭，想像力就是你的超能力。'
			},
			{
				title: '特色布丁製作',
				content: '想要布丁有更多種口味嗎?布丁教室開課啦，學會基本製作之後可以依據自己喜歡的口味做改變，並帶回家給家人品嘗。'
			},
			{
				title: '葡式蛋塔製作',
				content: '剛出爐焦香酥脆的蛋塔誰不愛呢?快學會做給你喜歡的人，不論大人小孩都是超人氣點心，抓住一個人的心要先抓住她的胃!'
			},
		],
		products: [
			{
				name: '抹茶馬卡龍',
				content: "日式抹茶製作，甜而不膩，外酥內軟，香濃不澀，馬卡龍一口可咬下的大小與抹茶的獨特香氣結合，讓人愛不釋口。",
				thumb: "img/1-1.jpg",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
			{
				name: '臺灣肉乾',
				content: "烘的酥脆的肉乾，咬下後滿嘴的肉香，脆脆的不會太油膩，不分年齡層，大家都愛的臺灣零食。",
				thumb: "img/1-2.jpg",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
			{
				name: '草莓奶烙',
				content: "香濃甜蜜，滑順口感，奶烙綿密的奶香與草莓的酸甜融合，形成多層次的口感，冰過後的口感更是一絕。",
				thumb: "img/1-3.jpg",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
			{
				name: '抹茶牛軋糖',
				content: "日式抹茶製作，富有嚼勁的牛軋糖與酥脆杏仁搭配，以抹茶為主角，越吃香氣越濃，不會過硬或過膩。",
				thumb: "img/2-1.jpg",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
			{
				name: '日式麻糬',
				content: "軟嫩的麻糬淋上各種不同口味的調醬，體驗不同的味覺饗宴，黏黏甜甜的麻糬總是能受到小朋友們青睞。",
				thumb: "img/2-2.jpg",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
			{
				name: '酒心巧克力',
				content: "甜蜜濃郁的巧克力加上不同的酒香，一口吃下彷彿能沉醉其中，是最適合送人的禮品，精緻又顯大氣。",
				thumb: "img/2-3.png",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
			{
				name: '臺灣肉乾',
				content: "烘的酥脆的肉乾，咬下後滿嘴的肉香，脆脆的不會太油膩，不分年齡層，大家都愛的臺灣零食。",
				thumb: "img/3-1.jpg",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
			{
				name: '鳳梨酥',
				content: "甜蜜的鳳梨內餡與鹹蛋黃結合出完美口感，是臺灣最為驕傲的特產，不只受到國人喜愛，更是觀光客必買伴手禮。",
				thumb: "img/3-2.jpg",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
			{
				name: '牛舌餅',
				content: "輕薄如紙，可透光，香脆可口，它的名字叫做『宜蘭餅』。帶著濃濃的鄉情味的名字，卻讓全世界的人都驚艷的豎起大拇指。",
				thumb: "img/3-3.jpg",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
			{
				name: '黑森林蛋糕',
				content: "蓬鬆柔軟的蛋糕上抹上奶油與巧克力，最後撒上巧克力碎片，彷彿是一片濃密的黑森林，層層疊加後形成豐富的口感。",
				thumb: "img/4-1.jpg",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
			{
				name: '蜜糖鬆餅',
				content: "可指定軟度，分為酥脆與鬆軟，淋上蜂蜜與糖粉，在內加上堅果，甜蜜的鬆餅就完成了，趁熱食用口感最佳。",
				thumb: "img/4-2.jpg",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
			{
				name: '一口小蛋糕',
				content: "一口小蛋糕如其名，一口就能吃掉的大小，烹飪的剛剛好的軟度，配上萬年不敗的草莓，是女孩子們的最愛。",
				thumb: "img/4-3.jpg",
				price: 50,
				amount: 0,
				amountShow: 1,
			},
		],
		isSlide: false,
		eventIndex: 0,
		productIndex: 0,
		selectIndex: 1,
	},
	methods: {
		minusOne(product){
			product.amountShow--
			product.amountShow = (product.amountShow < 1) ? 1 : product.amountShow
		},
		addOne(product){
			product.amountShow++
			product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
		},
		addToCart(product){
			product.amount += product.amountShow
		},
		remove(product){
			product.amount = 0
		},
	},
	computed: {
		productInCart(){
			return this.products
			.filter(p => p.amount)
			.map(p => {
				p.sum = p.price * p.amount
				p.num = p.amount
				return p
			})
		},
		total(){
			return this.productInCart
			.reduce((sum,p) => (p.sum + sum),0)
		},
		num(){
			return this.productInCart
			.reduce((num,p) => (p.num + num),0)
		},
		event() {
			return this.events[this.eventIndex]
		},
		product() {
			return this.products[this.productIndex]
		}
	}
})


















