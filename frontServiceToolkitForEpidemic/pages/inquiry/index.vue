<template>
	<div class="inquiry-index">
		<div class="inquiry-type-list">
			<div class="inquiry-type-box" @click="gotoClinic">
				<icon></icon>
				<image class = 'imag' src ='../../static/hospital.jpg'></image>
			</div>
			<div class="inquiry-type-box" @click="gotoDrugstore">
				<icon></icon>
				<image class = 'imag' src ='../../static/drug.jpg'></image>
			</div>
			<div class="inquiry-type-box" @click="gotoMask">
				<icon></icon>
				<image class = 'imag2' src ='../../static/inquiries.jpg'></image>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			gotoClinic() {
				uni.navigateTo({
					url: '/pages/inquiry/clinic'
				})
			},
			gotoDrugstore() {
				uni.navigateTo({
					url: '/pages/inquiry/drugstore'
				})
			},
			gotoMask() {
				uni.navigateTo({
					url: '/pages/inquiry/maskAuthenticity'
				})
			}
		}
	}
</script>

<style>
	.inquiry-index {
		width: 100%;
		margin: 0;
	}
	
	.inquiry-type-list {
		margin: auto;
		margin-top: 35px;
	}
	
	.inquiry-type-box {
		background-color: #FFFFFF;
		width: 90%;
		height: 150px;
		text-align: center;
		margin: auto;
		margin-top: 10px;
		margin-bottom: 10px;
		border: #CCCCCC;
		border-style: solid;
	}
	.imag{
		height:80%;
		margin-top: 20upx;
		margin-left: 20upx;
	}
	.imag2{
		height:80%;
		margin-top: 30upx;
		margin-left: 20upx;
	}
</style>
