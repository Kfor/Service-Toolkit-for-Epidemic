<template>
	<view class="center">
		<view class="center-list">
			<view class="center-list-item0 " >
				<image class="img" :src="userInfo.avatarUrl"></image>
			</view>
				<text class="text">v2.0</text>
		</view>
		<view class="center-list">
			<view class="center-list-item" >
				<text class="list-text">版本更新</text>
				<text class="content">已是最新版本</text>
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
	
</style>
