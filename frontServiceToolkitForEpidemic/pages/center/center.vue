<template>
	<view class="center">
		<view class="logo" @click="goPersonalInfo" >
			<image class="logo-img" :src="userInfo.avatarUrl"></image>
			<view class="logo-title">
				<text class="uer-name">{{userInfo.name}}</text>
				<text class="go-login navigat-arrow" >&#58883;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goOrder">
				<text class="list-icon">&#xe60c;</text>
				<text class="list-text">我的订单</text>
				<text class="navigat-arrow">&#58883;</text>
			</view>
			<view class="center-list-item" @click="goCollection">
				<text class="list-icon">&#xe60d;</text>
				<text class="list-text">我的收藏</text>
				<text class="navigat-arrow">&#58883;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goSettings">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">设置</text>
				<text class="navigat-arrow">&#58883;</text>
			</view>
			<view class="center-list-item" @click="goReflection">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">帮助与反馈</text>
				<text class="navigat-arrow">&#58883;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goVersion">
				<text class="list-icon">&#xe603;</text>
				<text class="list-text">版本</text>
				<text class="navigat-arrow">&#58883;</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				login: false,
				avatarUrl: '/static/logo.png',
				userInfo: {name:"张三",
						avatarUrl:'/static/logo.png'}
			}
		},
		methods: {
			goPersonalInfo() {
				uni.navigateTo({
					url: '/pages/center/personalInfo'
				});
			},
			goOrder() {
				uni.navigateTo({
					url: '/pages/center/order'
				});
			},
			goCollection() {
				uni.navigateTo({
					url: '/pages/center/collection'
				});
			},
			goSettings() {
				uni.navigateTo({
					url: '/pages/center/settings'
				});
			},
			goReflection() {
				uni.navigateTo({
					url: '/pages/center/reflection'
				});
			},
			goVersion() {
				uni.navigateTo({
					url: '/pages/center/version'
				});
			}
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
</style>
