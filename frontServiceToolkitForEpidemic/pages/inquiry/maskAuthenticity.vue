<template>
	<view class="news">
		<view class="search">
			<view class="search-block">
				<view class="search-ico-wapper">
					<text class="list-icon">&#59264;</text>
				</view>
				<view>
					<input type="text" class="search-text" focus placeholder="点击输入搜索结果" @input="onInput">
				</view>
				<view class="search-ico-wapper1">
					<text class="list-icon" style="margin-left: 0upx;" @click="getData">&#58885;</text>
				</view>
			</view>
			<view class="shadow"></view>
		</view>
		<div class="newsList">
			<div v-for="item in list" :value="item"  v-if="(item.国产医疗器械产品批准文号 && item.image.thumbnail.contentUrl)!=null">
				<div class="block" @click="See(item.url)">
					<div class="news-img">
						<img :src="item.image && item.image.thumbnail.contentUrl"></img> 
					</div>
					<div class="block2"> 
						<text class="title">{{item.name}}</text>
						<text class="description">{{item.description}}</text><br>
					</div>
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
				searchText:null,
				fetchPageNum: 1
			}
		},
		mounted(){  //template挂载到页面时调用
		    this.getData(); 
		},
		methods: {
			getData() {
				uni.request({
					url: this.$serverUrl + '/quirymask?number=沪械注准20172630093#/',
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
				console.log('list', this.list);
			},
			getSearchContent(){
				uni.request({
					url: this.$serverUrl + '/quirymask?number=沪械注准20172630093#/', //仅为示例，并非真实接口地址。
					data: {//参数
						"query":this.searchText,
						"mkt":"zh-CN",
						"count":"10"
						},
				    method:'POST',
					success: res => {
						console.log('返回', res.data);
						this.list = res.data.value;
					}
				});
			},
			See (e) {
			        window.location.href = e;
			},
			onInput(e) {
			    console.log(e.detail);
				var string = e.detail;
				let reg=new RegExp(' ','g')//g代表全部
			    this.searchText = JSON.stringify(string).replace(reg,'+');
				this.getSearchContent();
				console.log("replace",this.searchText);
			}
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
     background-color: #ffffff;
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
  	position: absolute;
  }
  
  .block {
	  background-color: #FFFFFF;
	  width: 100%;
	  margin-bottom: 40upx;
	  margin-left: 40upx;
	  -moz-box-shadow:2px 2px 10px #06c;
	  -webkit-box-shadow:2px 2px 10px #06c;
	  box-shadow:2px 2px 10px #06c;
  }
  
  .news-img {
	  width: 35%;
	  height: 100%;
	  margin-left: 5%;
	  margin-top: 2.5%;
	  margin-bottom: 2.5%;
	  display: inline-block;
	 
	}
  
  .block2 {
	  width: 55%;
	  height:100%;
	  margin-top: 5%;
	  display: inline-block;
  }
  
  .title {
	width:100%;
	margin-bottom: 10upx;
	display: -webkit-box;
  	font-size: 25upx;
  	font-weight: 700;
  	color: #000000;
  	font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  
  .description {
	width:100%;
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
  

</style>