<template>
	<div style="margin-top: 10rpx; height: 85%;">
		<uni-search-bar @confirm="search"></uni-search-bar>
		<OrderCommonPage :classify-data="classifyData"></OrderCommonPage>
	</div>
</template>

<script>
	import OrderCommonPage from "./orderCommonPage.vue";
	import classifyData from '../../common/classify.data.js';
	
	export default {
		data: function(){
			return {
				classifyData: classifyData,
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
</style>
