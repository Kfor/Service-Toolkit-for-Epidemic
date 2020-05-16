<template>
	<div class="order-index">
		<div class="selectList">
			<select class="selectBox" v-model="province">
				<option v-for="option in arr" :value="option.name" :key="option.name">
					{{ option.name }}
				</option>
			</select>
			<select class="selectBox" v-model="city">
				<option v-for="option in cityArr" :value="option.name" :key="option.name">
					{{ option.name }}
				</option>
			</select>
			<select class="selectBox" v-model="district" v-if="district">
				<option v-for="option in districtArr" :value="option.name" :key="option.name">
					{{ option.name }}
				</option>
			</select>
		</div>
		<div class="order-type-list">
			<div class="order-type-box" @click="gotoMedicine">
				<icon></icon>
				<text>医用物品</text>
			</div>
			<div class="order-type-box" @click="gotoSupermarket">
				<icon></icon>
				<text>超市物品</text>
			</div>
			<div class="order-type-box" @click="gotoFruit">
				<icon></icon>
				<text>水果蔬菜</text>
			</div>
		</div>
	</div>
</template>

<script>
	import locationData from "common/locationData.js";
	
	export default {
		data() {
			return locationData;
		},
		methods: {
			updateCity: function() {
				for (var i in this.arr) {
					var obj = this.arr[i];
					if (obj.name == this.province) {
						this.cityArr = obj.sub;
						break;
					}
				}
				this.city = this.cityArr[1].name;
			},
			updateDistrict: function() {
				for (var i in this.cityArr) {
					var obj = this.cityArr[i];
					if (obj.name == this.city) {
						this.districtArr = obj.sub;
						break;
					}
				}
				if (this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
					this.district = this.districtArr[1].name;
				} else {
					this.district = '';
				}
			},
			gotoFruit() {
				uni.navigateTo({
					url: '/pages/crowdingOrdering/fruit'
				})
			},
			gotoSupermarket() {
				uni.navigateTo({
					url: '/pages/crowdingOrdering/supermarket'
				})
			},
			gotoMedicine() {
				uni.navigateTo({
					url: '/pages/crowdingOrdering/medicine'
				})
			}
		},

		mounted: function() {
			this.updateCity();
			this.updateDistrict();
		},

		watch: {
			province: function() {
				this.updateCity();
				this.updateDistrict();
			},
			city: function() {
				this.updateDistrict();
			},
			district: function() {
			},
		}

	}
</script>

<style>
	.order-index {
		width: 100%;
		margin: 0;
	}

	.selectList {
		width: 700upx;
		margin-left: 20upx;
		text-align: center;
	}

	.selectBox {
		width: 100px;
		height: 25px;
		margin-top: 25px;
		margin-bottom: 5px;
		margin-left: 25upx;
	}

	.order-type-list {}

	.order-type-box {
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
</style>
