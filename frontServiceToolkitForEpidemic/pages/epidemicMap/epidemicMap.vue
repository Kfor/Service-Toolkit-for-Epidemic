<template>
	<view class="map">
		<div class="selection-div">
			<select v-model="itemSelected" v-on:change="getItemSelected" style="width: 120upx">
			<option v-for="item in itemList" v-bind:value="item.id" v-text="item.name" ></option>
			</select>
		</div>
		<image class="map-img" >
			
		</image>
		
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

<script >
	import * as uCharts from '../../js_sdk/u-charts/u-charts/u-charts.min.js';
	
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
				numList:''
			}
		},
		created(){
			this.itemSelected = this.itemList[0].id;
		},
		mounted(){  //template挂载到页面时调用
		//	this.getMapData(); //执行getOutlineData方法
			
		    this.getOutlineData(); //执行getOutlineData方法
//			console.log('data', this.numList);
		//    this.mychart = echarts.init(this.$refs.mapbox);
		//    this.mychart.setOption(option)
		},
		methods: {
			getOutlineData() {
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
	    width:60px;
		height: 40px;
		margin-top: 25px;
		margin-bottom: 5px;
		margin-left: 300px;
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
