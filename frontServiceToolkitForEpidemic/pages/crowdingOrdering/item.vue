<template>
	<view class="center">
		<view class="center-list">
			<view class="center-list-item0 " >
				<image class="img" :src='itemInfo.url'></image>
			</view>
			<text class="text">{{itemInfo.name}}</text>
		</view>
		<view class="center-list">
			<view class="center-list-item" >
				<text class="list-text">价格</text>
				<text class="content">{{itemInfo.price}}</text>
			</view>
			<view class="center-list-item" >
				<text class="list-text2">购买</text>
				<view class="shoppingNumber display-flex justify-between">
					<label class="minute" @click="btn_minute(itemInfo.index)">-</label>
					<input class="input"  v-model="itemInfo.num" />
					<label class="add" @click="btn_add(itemInfo.index)">+</label>
				</view>
			</view>
			<view class="center-list-item2" >
				<label class="confirm" @click="btn_confirm(itemInfo)">加入购物车</label>
			</view>
			
		</view>
	</view>
</template>

<script>
	
	export default {
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
				console.log('option', option);
				console.log('option.d', option.detriment);
				this.itemInfo.name = option.name;
				this.itemInfo.url = option.icon;
				this.itemInfo.price = option.price;
				console.log('item:', this.itemInfo.name,this.itemInfo.url);
				console.log('detriment:' , this.detriment);
			},
		data: function(){
			return {
				itemInfo: {
					index:'',
					name:'',
					url:'',
					price:'',
					num:0,
					store:''
				},
				detriment: []
			};
		},
		methods: {
			search: function(){
				
			},
			btn_minute: function(index) {
						/*	var detriment = this.detriment;
							var num = detriment[index].num;
							//商品数量>1时，数量可以减少
							if(num > 1) {
								num = num - 1;
								detriment[index].num = num;
								//商品数量<1时,商品数量不可减
							}else{
								alert('再减就没有商品啦')
							}
							//	this.hh(); */
							
							var num =parseInt(this.itemInfo.num);
							if(num > 1) {
								num = num - 1;
								this.itemInfo.num = num;
								//商品数量<1时,商品数量不可减
							}else{
								alert('再减就没有商品啦')
							}
						},
						//添加商品数量   
			btn_add: function(index) {
				
						//	var detriment = this.detriment;
						//	console.log(detriment);
							// 强转int类型
						//	var num =parseInt(detriment[index].num); 
						//	num =num + 1;
								// console.log(num)
						//	detriment[index].num = num; 
							//计算添加商品后的总价
						//	this.hh(); 
							var num =parseInt(this.itemInfo.num);
							num =num + 1;
							this.itemInfo.num = num;
						
						},
			btn_confirm: function(num) {
				
						//	var detriment = this.detriment;
						//	console.log(detriment);
							// 强转int类型
						//	var num =parseInt(detriment[index].num); 
						//	num =num + 1;
								// console.log(num)
						//	detriment[index].num = num; 
							//计算添加商品后的总价
						//	this.hh(); 
							var num =parseInt(this.itemInfo.num);
							num =num + 1;
							this.itemInfo.num = num;
						
						}
		}
	}
</script>

<style>
	.center-list-item0 {
		height: 400upx;
		text-align: center;
		align-content: center;
		align-items: center;
	}
	.center-list-item {
		height: 150upx;
	}
	
	.text {
		text-align: center;
		padding-bottom: 20upx;
	}
	
	.list-text {
		padding-top: 30upx;
		padding-left: 40upx;
		font-size: 40upx;
	}
	
	.list-text2  {
		padding-top: 40upx;
		padding-left: 40upx;
		font-size: 30upx;
	}
	
	
	.list-icon {
		padding-top: 30upx;
	}
	
	.navigat-arrow {
		padding-top: 30upx;
	}
	
	.img {
		height: 280upx;
		width: 280upx;
		align-self: center;
		padding-top: 20upx;
		padding-left: 230upx;
		padding-right: 200upx;
	}
	
	.content {
		padding-top: 55upx;
		text-align:right;
		padding-right: 40upx;
		font-size: 30upx;
		color: #939393;
	}
	
	.shoppingNumber {
		width: 210upx;
		margin-left: 360upx;
		margin-top: 30upx;
	}
	.minute {
		padding-right: 20upx;
		padding-left: 20upx;
		width: 30upx;
	}
	.add {
		padding-right: 20upx;
		padding-left: 20upx;
		width: 30upx;
	}
	.input {
		padding-left: 20upx;
		padding-right: 20upx;
		width: 30upx;
	}
	
	.center-list-item2 {
		height: 150upx;
		
	}
	
	.confirm {
		width:350upx;
		height: 60upx;
		background-color: #c20404;
		text-align: center;
		color: #eeeeee;
		margin-left: 330upx;
		margin-top: 30upx;
	}
	
</style>



