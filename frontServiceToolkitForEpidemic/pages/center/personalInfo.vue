<template>
	<view class="center">
		<view class="center-list">
			<view class="center-list-item border-bottom" >
				<text class="list-text">头像</text>
				<image class="img" :src="userInfo.avatarUrl"></image>
			</view>
			<view class="center-list-item  border-bottom" >
				<text class="list-text">昵称</text>
				<input type="text" class="content" value="张三">
				
			</view>
			<view class="center-list-item border-bottom" >
				<text class="list-text">性别</text>
				<input type="text" class="content" value="男">
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item" >
				<text class="list-text">我的地址</text>
				<input type="text" class="content2" value="浙江大学玉泉校区">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatarUrl: '/static/logo.png',
				userInfo: {name:"张三",
						avatarUrl:'/static/logo.png'}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.logo-img {
		width: 150upx;
		height: 150upx;
		margin-left: 50upx;
		border-radius: 150upx;
	}
	
	.uer-name {
		height: 60upx;
		line-height: 60upx;
		margin-left: 20upx;
		font-size: 43upx;
		color: #FFFFFF;
	}
	.center-list-item {
		height: 150upx;
	}
	
	.list-text {
		padding-top: 30upx;
		padding-left: 40upx;
	}
	
	
	.list-icon {
		padding-top: 30upx;
	}
	
	.navigat-arrow {
		padding-top: 30upx;
	}
	
	.img {
		height: 100upx;
		width: 100upx;
		padding-top: 20upx;
		padding-right: 40upx;
	}
	
	.content {
		padding-top: 50upx;
		text-align:right;
		padding-right: 40upx;
		color: #939393;
	}
	
	.content2 {
		padding-top: 50upx;
		text-align:right;
		padding-right: 40upx;
		color: #939393;
	}
	
</style>
