<template>
	<div style="margin-top: 10rpx; height: 85%;">
		
		<OrderCommonPage :classify-data="classifyData"></OrderCommonPage>
	</div>
</template>

<script>
	import OrderCommonPage from "./orderCommonPage.vue";
//	import classifyData from '../../common/fruit.data.js';
	import detriment from '../../common/fruit.detriment.js';
	export default {
		data: function(){
			return {
				classifyData:[],
				detriment: detriment,
				
				
			};
		},
		mounted() {
			this.getItemList();
		},
		methods: {
			getItemList() {
				console.log(this.$serverUrl + '/getItemList');
				uni.request({
					url: this.$serverUrl + '/getItemList',
					method: 'GET',
					
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log('失败!');
						}
						console.log(ret.data);
						this.classifyData = ret.data.itemList;
						
					}
					
				});
			},
		},
		components: {OrderCommonPage}
	}
</script>

<style>
	OrderCommonPage {
		padding-top: 40upx;
		width: 100%;
	}
	
	
</style>
