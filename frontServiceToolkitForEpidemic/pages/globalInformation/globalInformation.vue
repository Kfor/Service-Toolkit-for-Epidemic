<template>
	<view class="news">
		<div class="search">
			<view class="search-block">
				<view class="search-ico-wapper">
					<text class="list-icon">&#59264;</text>
				</view>
				<input type="text" value="" placeholder="点击输入搜索内容" class="search-text" maxlength="10" focus/>
				<view class="search-ico-wapper1">
					<text class="list-icon" style="margin-left: 0upx;">&#58885;</text>
				</view>
			</view>
			<view class="shadow"></view>
		</div>
		<div class="newsList">
			<div v-for="item in list" :value="item">
				<div class="block" @click="See(item.url)">
					<br>
					<text class="title">{{item.name}}</text>
					<text class="description">{{item.description}}</text><br>
		<!--			<text class="date">{{item.datePublished}} </text><br>-->
				</div>
			</div> 
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				refreshing: false,
				itemList: [],
				list: [],
				fetchPageNum: 1
			}
		},
		
		onReachBottom() {
			console.log('滑动到页面底部')
			this.getData();
		},
		onPullDownRefresh() {
			console.log('下拉刷新');
			this.refreshing = true;
			this.getData();
		},
		mounted(){  //template挂载到页面时调用
		//	this.getMapData(); //执行getOutlineData方法
		    this.getData(); //执行getOutlineData方法
		//    this.mychart = echarts.init(this.$refs.mapbox);
		//    this.mychart.setOption(option)
		},
		methods: {
			getData() {
				uni.request({
					url: this.$serverUrl + '/getNews',
					success: (ret) => {
						console.log('data', ret);
						if (ret.statusCode !== 200) {
							console.log('失败!');
						} else {
							this.list = ret.data.value;
							console.log('list', this.list);
						}
					}
				});
			},
			See (e) {
			        window.location.href = e
			      },
			goDetail(e) {
				uni.navigateTo({
					url: '../detail/detail?data=' + encodeURIComponent(JSON.stringify(e))
				})
			},
			
		}
	}
</script>

<style>
.news {
	margin-top: 150upx;
}
.search {
	background-color: #aaaaff;
	width: 100%;
	height: 200upx;
}
 
.list-icon {
     width: 40upx;
     height: 40upx;
	 margin-left: 30upx;
	 margin-top: -45upx;
 }
 
 .search-text{
     font-size: 14px;
     background-color: #FFFFFF;
     height: 60upx;
     width: 480upx;
 }
 .search-block{
     display: flex;
     flex-direction: row;
     padding-left: 60upx;
     position: absolute;
     top: 50upx;
 }
 .search-ico-wapper{
     background-color: #FFFFFF;
     display: flex;
     flex-direction:column;
     justify-content: center;
     border-bottom-left-radius:18px;
     border-top-left-radius: 18px;
 }
 .search-ico-wapper1{
      background-color: #FFFFFF;
      display: flex;
      flex-direction:column;
      justify-content: center;
      border-bottom-right-radius:18px;
      border-top-right-radius: 18px;
  }
 .shadow{
      width: 638upx;
      height: 60upx;
      border-radius:18px;
      -moz-box-shadow:0 0 10px #e6e6e6;
      -webkit-box-shadow:0 0 10px #e6e6e6;
      box-shadow:0 0 10px #e6e6e6;
      position: absolute;
      top: 50upx;
      left: 60upx;
  }
  
  .newsList {
  	
  	width: 90%;
  	margin-top: 30upx;
  	margin-left: 5%;
  	position: absolute;
  }
  
  .block {
	  background-color: #FFFFFF;
	  width: 100%;
	  margin-bottom: 40upx;
	  -moz-box-shadow:2px 2px 10px #06c;
	  -webkit-box-shadow:2px 2px 10px #06c;
	  box-shadow:2px 2px 10px #06c;
  }
  
  .title {
	width:90%;
	margin-left: 5%;
	margin-bottom: 10upx;
	display: -webkit-box;
  	font-size: 25upx;
  	font-weight: 700;
  	color: #000000;
  	font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  
  .description {
	width:90%;
	padding-left: 5%;
  	font-size: 15upx;
  	color: #908b7f;
	display: -webkit-box;
	overflow: hidden;
	text-overflow: ellipsis;
	word-wrap: break-word;
	white-space: normal !important;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
  }
  
  .date {
  	font-size: 20upx;
  	color: #868686;
	text-align: right;
	align-items: right;
	align-content: right;
	
  }
  
  .url {
  	font-size: 25upx;
  	color: #000000;
  	margin:0 auto;
  }
</style>
