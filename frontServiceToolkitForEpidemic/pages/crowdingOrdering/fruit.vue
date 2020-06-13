<template>
	<div style="margin-top: 10rpx; height: 85%;">
		
		<OrderCommonPage :classify-data="classifyData" :detriment="detriment"></OrderCommonPage>
	</div>
</template>

<script>
	import OrderCommonPage from "./orderCommonPage.vue";
	import classifyData from '../../common/fruit.data.js';
	import detriment from '../../common/fruit.detriment.js';
	export default {
		data: function(){
			return {
				classifyData: classifyData,
				detriment: detriment,
				
				
			};
		},
		methods: {
			search: function(){
				
			}
		},
		components: {OrderCommonPage}
	}
</script>

<style>
	OrderCommonPage {
		padding-top: 40upx;
	}
	
	
</style>
