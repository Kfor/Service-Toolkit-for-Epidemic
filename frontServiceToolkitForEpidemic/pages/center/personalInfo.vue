<template>
	<view class="center">
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">昵称</text>
				<text class="thisone">小编也不知道</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">性别</text>
				<text class="thisone">女</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">我的地址</text>
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
				avatarUrl: '/static/man.png',
				userInfo: {name:"李建国",
						avatarUrl:'/static/man.jpg'}
			}
		}
	}
</script>

<style>
	.thisone{
		margin-right: 10upx;
		margin-top: 20upx;
	}
</style>
