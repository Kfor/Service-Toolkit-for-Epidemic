<template>
	<view class="map">
		<div class="selection-div">
			<text class="title1"> 疫情地图</text>
			<select class="input-box" v-model="itemSelected" v-on:change="getItemSelected" style="width: 120upx">
			<option v-for="item in itemList" v-bind:value="item.id" v-text="item.name" ></option>
			</select>
		</div>
		<div class="map-img" ref="mapbox" style="width:100%;height:400px;margin:0 auto" ></div>
		
		<view class="outlineData" >
			<div>
				<div class="block">
					<text class= "title">现存确诊</text><br>
					<text class="data">{{this.currentConfirmedCount}}</text><br>
					<text class="trend">较昨日增加 </text>
					<text class="incr">{{this.currentConfirmedIncr}}</text>
				</div>
				<div class="block">
					<text class= "title">累计确诊</text><br>
					<text class="data" style="color:#af2424">{{this.confirmedCount}}</text><br>
					<text class="trend">较昨日增加 </text>
					<text class="incr">{{this.confirmedIncr}}</text>
				</div>
			</div>
			<div>
				<div class="block">
					<text class= "title">累计死亡</text><br>
					<text class="data" style="color:#000000">{{this.deadCount}}</text><br>
					<text class="trend">较昨日增加 </text>
					<text class="incr">{{this.deadIncr}}</text>
				</div>
				<div class="block">
					<text class= "title">累计治愈</text><br>
					<text class="data" style="color:#309f0e">{{this.curedCount}}</text><br>
					<text class="trend">较昨日增加 </text>
					<text class="incr">{{this.curedIncr}}</text>
				</div>
			</div>
		</view>
		
		
		<view class="map-list">
			<view class="map-list-item border-bottom" @click="goCommunity">
				<text class="list-icon">&#58888;</text>
				<text class="list-text">小区疫情查询</text>
				<text class="navigat-arrow">&#58883;</text>
			</view>
			<view class="map-list-item" @click="goGraph">
				<text class="list-icon">&#61067;</text>
				<text class="list-text">全国/世界疫情趋势图</text>
				<text class="navigat-arrow">&#58883;</text>
			</view>
		</view>
	</view>
</template>

<script src="../../node_modules/echarts/dist/echarts.js" type="text/javascript" charset="utf-8"></script>
<script src="./../node_modules/echarts/map/js/china.js" type="text/javascript" charset="utf-8"></script>
<script src="./../node_modules/echarts/map/js/world.js" type="text/javascript" charset="utf-8"></script>
<script >
	import echarts from "../../node_modules/echarts"
	import "echarts/map/js/china.js" //引入中国地图
	import "echarts/map/js/world.js"
	
	const option = {
		  series: [{
			name: '确诊人数',
			type: 'map',
			// 告诉echarts渲染一个地图
			map: '',
			nameMap : {"Canada": "加拿大",
			             "Turkmenistan": "土库曼斯坦",
			                              "Saint Helena": "圣赫勒拿",
			                              "Lao PDR": "老挝",
			                              "Lithuania": "立陶宛",
			                              "Cambodia": "柬埔寨",
			                              "Ethiopia": "埃塞俄比亚",
			                              "Faeroe Is.": "法罗群岛",
			                              "Swaziland": "斯威士兰",
			                              "Palestine": "巴勒斯坦",
			                              "Belize": "伯利兹",
			                              "Argentina": "阿根廷",
			                              "Bolivia": "玻利维亚",
			                              "Cameroon": "喀麦隆",
			                              "Burkina Faso": "布基纳法索",
			                              "Aland": "奥兰群岛",
			                              "Bahrain": "巴林",
			                              "Saudi Arabia": "沙特阿拉伯",
			                              "Fr. Polynesia": "法属波利尼西亚",
			                              "Cape Verde": "佛得角",
			                              "W. Sahara": "西撒哈拉",
			                              "Slovenia": "斯洛文尼亚",
			                              "Guatemala": "危地马拉",
			                              "Guinea": "几内亚",
			                              "Dem. Rep. Congo": "刚果（金）",
			                              "Germany": "德国",
			                              "Spain": "西班牙",
			                              "Liberia": "利比里亚",
			                              "Netherlands": "荷兰",
			                              "Jamaica": "牙买加",
			                              "Solomon Is.": "所罗门群岛",
			                              "Oman": "阿曼",
			                              "Tanzania": "坦桑尼亚",
			                              "Costa Rica": "哥斯达黎加",
			                              "Isle of Man": "曼岛",
			                              "Gabon": "加蓬",
			                              "Niue": "纽埃",
			                              "Bahamas": "巴哈马",
			                              "New Zealand": "新西兰",
			                              "Yemen": "也门",
			                              "Jersey": "泽西岛",
			                              "Pakistan": "巴基斯坦",
			                              "Albania": "阿尔巴尼亚",
			                              "Samoa": "萨摩亚",
			                              "Czech Rep.": "捷克",
			                              "United Arab Emirates": "阿拉伯联合酋长国",
			                              "Guam": "关岛",
			                              "India": "印度",
			                              "Azerbaijan": "阿塞拜疆",
			                              "N. Mariana Is.": "北马里亚纳群岛",
			                              "Lesotho": "莱索托",
			                              "Kenya": "肯尼亚",
			                              "Belarus": "白俄罗斯",
			                              "Tajikistan": "塔吉克斯坦",
			                              "Turkey": "土耳其",
			                              "Afghanistan": "阿富汗",
			                              "Bangladesh": "孟加拉国",
			                              "Mauritania": "毛里塔尼亚",
			                              "Dem. Rep. Korea": "朝鲜",
			                              "Saint Lucia": "圣卢西亚",
			                              "Br. Indian Ocean Ter.": "英属印度洋领地",
			                              "Mongolia": "蒙古",
			                              "France": "法国",
			                              "Cura?ao": "库拉索岛",
			                              "S. Sudan": "南苏丹",
			                              "Rwanda": "卢旺达",
			                              "Slovakia": "斯洛伐克",
			                              "Somalia": "索马里",
			                              "Peru": "秘鲁",
			                              "Vanuatu": "瓦努阿图",
			                              "Norway": "挪威",
			                              "Malawi": "马拉维",
			                              "Benin": "贝宁",
			                              "St. Vin. and Gren.": "圣文森特和格林纳丁斯",
			                              "Korea": "韩国",
			                              "Singapore": "新加坡",
			                              "Montenegro": "黑山共和国",
			                              "Cayman Is.": "开曼群岛",
			                              "Togo": "多哥",
			                              "China": "中国",
			                              "Heard I. and McDonald Is.": "赫德岛和麦克唐纳群岛",
			                              "Armenia": "亚美尼亚",
			                              "Falkland Is.": "马尔维纳斯群岛（福克兰）",
			                              "Ukraine": "乌克兰",
			                              "Ghana": "加纳",
			                              "Tonga": "汤加",
			                              "Finland": "芬兰",
			                              "Libya": "利比亚",
			                              "Dominican Rep.": "多米尼加",
			                              "Indonesia": "印度尼西亚",
			                              "Mauritius": "毛里求斯",
			                              "Eq. Guinea": "赤道几内亚",
			                              "Sweden": "瑞典",
			                              "Vietnam": "越南",
			                              "Mali": "马里",
			                              "Russia": "俄罗斯",
			                              "Bulgaria": "保加利亚",
			                              "United States": "美国",
			                              "Romania": "罗马尼亚",
			                              "Angola": "安哥拉",
			                              "Chad": "乍得",
			                              "South Africa": "南非",
			                              "Fiji": "斐济",
			                              "Liechtenstein": "列支敦士登",
			                              "Malaysia": "马来西亚",
			                              "Austria": "奥地利",
			                              "Mozambique": "莫桑比克",
			                              "Uganda": "乌干达",
			                              "Japan": "日本",
			                              "Niger": "尼日尔",
			                              "Brazil": "巴西",
			                              "Kuwait": "科威特",
			                              "Panama": "巴拿马",
			                              "Guyana": "圭亚那",
			                              "Madagascar": "马达加斯加",
			                              "Luxembourg": "卢森堡",
			                              "American Samoa": "美属萨摩亚",
			                              "Andorra": "安道尔",
			                              "Ireland": "爱尔兰",
			                              "Italy": "意大利",
			                              "Nigeria": "尼日利亚",
			                              "Turks and Caicos Is.": "特克斯和凯科斯群岛",
			                              "Ecuador": "厄瓜多尔",
			                              "U.S. Virgin Is.": "美属维尔京群岛",
			                              "Brunei": "文莱",
			                              "Australia": "澳大利亚",
			                              "Iran": "伊朗",
			                              "Algeria": "阿尔及利亚",
			                              "El Salvador": "萨尔瓦多",
			                              "C?te d'Ivoire": "科特迪瓦",
			                              "Chile": "智利",
			                              "Puerto Rico": "波多黎各",
			                              "Belgium": "比利时",
			                              "Thailand": "泰国",
			                              "Haiti": "海地",
			                              "Iraq": "伊拉克",
			                              "S?o Tomé and Principe": "圣多美和普林西比",
			                              "Sierra Leone": "塞拉利昂",
			                              "Georgia": "格鲁吉亚",
			                              "Denmark": "丹麦",
			                              "Philippines": "菲律宾",
			                              "S. Geo. and S. Sandw. Is.": "南乔治亚岛和南桑威奇群岛",
			                              "Moldova": "摩尔多瓦",
			                              "Morocco": "摩洛哥",
			                              "Namibia": "纳米比亚",
			                              "Malta": "马耳他",
			                              "Guinea-Bissau": "几内亚比绍",
			                              "Kiribati": "基里巴斯",
			                              "Switzerland": "瑞士",
			                              "Grenada": "格林纳达",
			                              "Seychelles": "塞舌尔",
			                              "Portugal": "葡萄牙",
			                              "Estonia": "爱沙尼亚",
			                              "Uruguay": "乌拉圭",
			                              "Antigua and Barb.": "安提瓜和巴布达",
			                              "Lebanon": "黎巴嫩",
			                              "Uzbekistan": "乌兹别克斯坦",
			                              "Tunisia": "突尼斯",
			                              "Djibouti": "吉布提",
			                              "Greenland": "格陵兰",
			                              "Timor-Leste": "东帝汶",
			                              "Dominica": "多米尼克",
			                              "Colombia": "哥伦比亚",
			                              "Burundi": "布隆迪",
			                              "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
			                              "Cyprus": "塞浦路斯",
			                              "Barbados": "巴巴多斯",
			                              "Qatar": "卡塔尔",
			                              "Palau": "帕劳",
			                              "Bhutan": "不丹",
			                              "Sudan": "苏丹",
			                              "Nepal": "尼泊尔",
			                              "Micronesia": "密克罗尼西亚",
			                              "Bermuda": "百慕大",
			                              "Suriname": "苏里南",
			                              "Venezuela": "委内瑞拉",
			                              "Israel": "以色列",
			                              "St. Pierre and Miquelon": "圣皮埃尔和密克隆群岛",
			                              "Central African Rep.": "中非",
			                              "Iceland": "冰岛",
			                              "Zambia": "赞比亚",
			                              "Senegal": "塞内加尔",
			                              "Papua New Guinea": "巴布亚新几内亚",
			                              "Trinidad and Tobago": "特立尼达和多巴哥",
			                              "Zimbabwe": "津巴布韦",
			                              "Jordan": "约旦",
			                              "Gambia": "冈比亚",
			                              "Kazakhstan": "哈萨克斯坦",
			                              "Poland": "波兰",
			                              "Eritrea": "厄立特里亚",
			                              "Kyrgyzstan": "吉尔吉斯斯坦",
			                              "Montserrat": "蒙特塞拉特",
			                              "New Caledonia": "新喀里多尼亚",
			                              "Macedonia": "马其顿",
			                              "Paraguay": "巴拉圭",
			                              "Latvia": "拉脱维亚",
			                              "Hungary": "匈牙利",
			                              "Syria": "叙利亚",
			                              "Honduras": "洪都拉斯",
			                              "Myanmar": "缅甸",
			                              "Mexico": "墨西哥",
			                              "Egypt": "埃及",
			                              "Nicaragua": "尼加拉瓜",
			                              "Cuba": "古巴",
			                              "Serbia": "塞尔维亚",
			                              "Comoros": "科摩罗",
			                              "United Kingdom": "英国",
			                              "Fr. S. Antarctic Lands": "南极洲",
			                              "Congo": "刚果（布）",
			                              "Greece": "希腊",
			                              "Sri Lanka": "斯里兰卡",
			                              "Croatia": "克罗地亚",
			                              "Botswana": "博茨瓦纳",
			                              "Siachen Glacier": "锡亚琴冰川地区"
			                         
			                            
			                      },
			// 告诉echarts渲染中国地图
			label: {
			  // 设置地区汉字
			  show: false,
			  color: '#333',
			  fontSize: 10
			},
			itemStyle: {
			  // 地图区域样式
			  areaColor: '#eee'
			},
			roam: true,
			// 鼠标滚轮效果
			zoom: 1.2,
			// 地图放大缩小
			emphasis: {
			  // 鼠标经过地图和字体样式
			  label: {
				color: '#fff',
				fontSize: 12
			  },
			  itemStyle: {
				areaColor: '#ccc'
			  }
			},
			data: []
			// 展示后台给的数据，必须格式（name:xxx;value:xxx）
		  }],
		  visualMap: [{
			// 区域显示颜色
			type: 'piecewise',
			show: true,
			// splitNumber: 4
			pieces: [
			  {min: 10000},
			  {min: 1000, max: 9999},
			  {min: 100, max: 999},
			  {min: 10, max: 99},
			  {min: 1, max: 9},
			  {max: 0}
			],
			inRange: {
			  // 区域图标样式
			  symbol: 'rect',
			  
			  color: ['#FFFFFF', '#FFAA85', '#FF7B69', '#CC2929', '#8C0D0D', '#660208']
			}
		  }],
		  tooltip: {
			// 鼠标放上去显示内容
			trigger: 'item'
		  },
		  toolbox: {
			// 下载
			show: false,
			orient: 'vertical',
			left: 'right',
			top: 'center',
			feature: {
			  dataView: {readyOnly: false},
			  restore: {},
			  saveAsImage: {}
			}
		  }
	}	
		//	console.log('data1',option.series[0].data);
		
	export default {
		props: {
		    selectedDepartment: Number
		}, 
		data() {
			return { 
				showOptions: false,
				itemList:[{name:"国内",id:'inland'},{name:"世界",id:'global'}],
				itemSelected: 'inland',
				currentConfirmedCount: 1947236,
			//	currentConfirmedCount: '',
				confirmedCount: 3070127,
				curedCount: 905341,
				deadCount: 217550,
				currentConfirmedIncr: 2576,
				confirmedIncr: 18709,
				curedIncr: 15835,
				deadIncr: 298,
				numList:'',
				mapList:'',
				myChart:'',
				mapData:[],
				map:''
			}
		},
		created(){
			this.itemSelected = this.itemList[0].id;
		},
		mounted(){  //template挂载到页面时调用
			this.getMapData();
		
		    this.getOutlineData(); //执行getOutlineData方法
			this.mycharts = echarts.init(this.$refs.mapbox)
			    // 初始化echarts
			this.mycharts.setOption(option)
		//	console.log('mapList',this.mapList);
		//	console.log('mapdata',this.mapData);
			
		},
		methods: {
			getMapData(){
				uni.request({
					url: this.$serverUrl + '/getMapData?area=' + this.itemSelected,
					//method: 'GET',
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log('失败!');
						}
						console.log('ret',ret);
						this.mapList=';'
						this.mapList=ret.data.newslist;
						
						this.mapData=[];
						for (var item in this.mapList) { 
						//	console.log('item',this.mapList[item]);
							if(this.itemSelected=='inland')
								this.mapData[item] = {
											name:this.mapList[item].provinceShortName,
											value:this.mapList[item].currentConfirmedCount
										};
							else if(this.itemSelected=='global')
								this.mapData[item] = {
											name:this.mapList[item].provinceName,
											value:this.mapList[item].currentConfirmedCount
										};
						}
						option.series[0].data = this.mapData;
					//	console.log('getList',this.mapData);
						if(this.itemSelected=='inland')
							option.series[0].map = 'china';
						else if(this.itemSelected=='global')
							option.series[0].map = 'world';
						this.mycharts.setOption(option)
					//	console.log('getList',this.mapList);
						//console.log('getdata',this.mapData);
					}
				});
		//		
			},
			
			getOutlineData() {
				console.log(this.$serverUrl + '/getOutlineData?area=' + this.itemSelected);
				uni.request({
					url: this.$serverUrl + '/getOutlineData?area=' + this.itemSelected,
					//method: 'GET',
					
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log('失败!');
						}
						
						this.numList=ret.data;
						console.log('data', ret.data);
						this.currentConfirmedCount = ret.data.currentConfirmedCount;
						this.confirmedCount = ret.data.confirmedCount;
						this.curedCount = ret.data.curedCount;
						this.deadCount = ret.data.deadCount;
										
						this.currentConfirmedIncr = ret.data.currentConfirmedIncr;
						this.confirmedIncr = ret.data.confirmedIncr;
						this.curedIncr = ret.data.curedIncr;
						this.deadIncr = ret.data.deadIncr;
					}
					
				});
			},
			
			goCommunity() {
				uni.navigateTo({
					url: '/pages/epidemicMap/community'
				});
			},
			goGraph() {
				uni.navigateTo({
					url: '/pages/epidemicMap/graph'
				});
			},
			getItemSelected(){
			    console.log(this.itemSelected)
				this.getOutlineData();
				this.getMapData();
			}
		}
		
	}
	
</script>

<style>
	.map {
		flex-direction: column;
		min-height: 100vh;
	}
	
	.selection-div {
		background-color: #FFFFFF;
		height: 40px;
		text-align: right;
	}
	.title1 {
		line-height: 90upx;
		font-size: 34upx;
		font-weight: 700;
		color: #000000;
		margin-right: 20%;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	
	.input-box {
		margin-right: 25upx;
		margin-top: 25upx;
	}
	
	.map-img {
		background-color: #ffffff;
	}
	
	.block {
		background-color: #FFFFFF;
		width: 345upx;
		height: 200upx;
		margin: 20upx 0 20upx 20upx;
		text-align: center;
	}
	
	.title {
		height: 100upx;
		width: 60upx;
		line-height: 90upx;
		font-size: 34upx;
		font-weight: 700;
		color: #000000;
		margin:0 auto;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
	
	.data {
		height: 60upx;
		width: 60upx;
		line-height: 50upx;
		font-size: 40upx;
		font-weight: 700;
		color: #f0a713;
		margin:0 auto;
		font-family: texticons;
	}
	
	.trend {
		height: 50upx;
		width: 40upx;
		line-height: 50upx;
		font-size: 20upx;
		color: #868686;
		margin:0 auto;
		font-family: texticons;
	}
	
	.incr {
		height: 50upx;
		width: 40upx;
		line-height: 50upx;
		font-size: 25upx;
		color: #000000;
		margin:0 auto;
		font-family: texticons;
	}
	
	.go-community.navigat-arrow {
		font-size: 38upx;
		color: #FFFFFF;
	}
	
	.community-title {
		height: 150upx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20upx;
	}
	
	.map-img {
		width: 720upx;
		height: 440upx;
	}
	
	
	
	.map-list {
		background-color: #FFFFFF;
		margin-top: 20upx;
		width: 750upx;
		flex-direction: column;
	}
	
	.map-list-item {
		height: 150upx;
		width: 750upx;
		box-sizing: border-box;
		flex-direction: row;
		padding: 0upx 20upx;
	}
	
	.border-bottom {
		border-bottom-width: 1upx;
		border-color: #c8c7cc;
		border-bottom-style: solid;
	}
	
	.list-icon {
		width: 40upx;
		height: 90upx;
		line-height: 90upx;
		font-size: 45upx;
		color: #6ec5ff;
		margin-top: 30upx;
		text-align: center;
		font-family: texticons;
		margin-right: 20upx;
	}
	
	.list-text {
		height: 90upx;
		line-height: 90upx;
		font-size: 38upx;
		color: #555;
		margin-top: 30upx;
		flex: 1;
		text-align: left;
	}
	
	.navigat-arrow {
		height: 90upx;
		width: 40upx;
		line-height: 90upx;
		font-size: 40upx;
		color: #555;
		margin-top: 30upx;
		text-align: right;
		font-family: texticons;
	}
	
	
	
</style>
