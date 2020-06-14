<template>
	<section class="aui-flexView">
		<section class="aui-scrollView">
			<div class="aui-tab" data-ydui-tab>
				<div class="divHeight"></div>
				<div class="tab-panel">
					<block v-for="(menuList,index2) in menuLists" :key="index2">
						<div :class="[currentTab==index2 ? 'tab-panel-item tab-active' : 'tab-panel-item']">
							<block v-for="(menuList2,index3) in menuList" :key="index3">
								<div class="tab-item">
									<a href="javascript:void(0);" class="aui-well-item aui-well-item-clear">
										<div class="aui-well-item-hd">
											<img :src="menuList2.logoimg" alt="">
										</div>
										<div class="aui-well-item-bd">
											<h3>{{menuList2.dname}}</h3>
										</div>
										<span class="aui-well-item-fr">{{menuList2.zt}}</span>
									</a>
									<div class="aui-mail-product">
										<a href="javascript:;" class="aui-mail-product-item">
											<div class="aui-mail-product-item-hd">
												<img :src="menuList2.img" alt="">
											</div>
											<div class="aui-mail-product-item-bd">
												<p>{{menuList2.name}}</p>
											</div>
										</a>
									</div>
									<a href="javascript:;" class="aui-mail-payment">
										<p>
											共{{menuList2.sum}}件商品 实付款: ￥{{menuList2.pri}}
										</p>
									</a>
									<div class="aui-mail-button">
										<a href="javascript:;" :class="[menuList2.but_ddshouhuo==0 ? 'hd' : menuList2.but_ddshouhuo==2 ? '' :'aui-df-color']">等待收货</a>
										<a href="javascript:;" :class="[menuList2.but_wuliu==0 ? 'hd' : menuList2.but_wuliu==2 ? '' :'aui-df-color']">查看物流</a>
										<a href="javascript:;" :class="[menuList2.but_rebuy==0 ? 'hd' : menuList2.but_rebuy==2 ? '' :'aui-df-color']">再次购买</a>
										<a href="javascript:;" :class="[menuList2.but_zhifu==0 ? 'hd' : menuList2.but_zhifu==2 ? '' :'aui-df-color']">去支付</a>
									</div>
								</div>
								<div :class="[index3+1==menuList.length ? 'hd':'divHeight']"></div>
							</block>
						</div>
					</block>
				</div>
			</div>
		</section>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				currentTab: 0,
				menuLists: [
					[
						{
							"logoimg": '../../static/search-0.png',
							"dname":"自营蔬菜店",
							"zt":"已付款",
							"img": '../../static/search-0.png',
							"name":"清新不刺激 农贸市场直接进货蔬菜 天然无污染大白菜1斤",
							"sum":"1",
							"pri":"3.00",
							// 0=没有,1=有,2=标红
							"but_rebuy":2,
							"but_pingjia":1,
							"but_fapiao":1,
							"but_zhifu":0,
							"but_wuliu":0,
							"but_ddshouhuo":0,
						},
						{
							"logoimg": '../../static/icon-logo.png',
							"dname":"自营蔬菜店",
							"zt":"已取消",
							"img": '../../static/pd-002.png',
							"name":"清新不刺激 农贸市场直接进货蔬菜 天然无污染娃娃菜1斤",
							"sum":"1",
							"pri":"4.00",
							"but_rebuy":2,
							"but_pingjia":0,
							"but_fapiao":0,
							"but_zhifu":0,
							"but_wuliu":0,
							"but_ddshouhuo":0,
						},
						{
							"logoimg": '../../static/icon-logo.png',
							"dname":"自营蔬菜店",
							"zt":"已取消",
							"img": '../../static/pd-003.png',
							"name":"清新不刺激 农贸市场直接进货蔬菜 天然无污染土豆1斤",
							"sum":"1",
							"pri":"3.00",
							"but_rebuy":2,
							"but_pingjia":1,
							"but_fapiao":0,
							"but_zhifu":0,
							"but_wuliu":0,
							"but_ddshouhuo":0,
						},
					],
					[
						{
							"logoimg": '../../static/icon-logo.png',
							"dname":"SONY京东自营官方旗舰店",
							"zt":"等待付款",
							"img": '../../static/pd-002.png',
							"name":"索尼（SONY）WH-1000XM2 Hi-Res无线蓝牙耳机 智能降噪耳机 头戴式 1000x二代 香槟金",
							"sum":"1",
							"pri":"2899.00",
							"but_rebuy":0,
							"but_pingjia":0,
							"but_fapiao":0,
							"but_zhifu":2,
							"but_wuliu":0,
							"but_ddshouhuo":0,
						}
					],
					[
						{
							"logoimg": '../../static/icon-logo.png',
							"dname":"自营FILA产品专营店",
							"zt":"等待收货",
							"img": '../../static/pd-003.png',
							"name":"FILA斐乐男鞋2018夏季新款LOGO轻便复古跑鞋运动鞋男 标准白 41FILA斐乐男鞋2018夏季新款LOGO轻便复古跑鞋运动鞋男 标准白 41FILA斐乐男鞋2018夏季新款LOGO轻便复古跑鞋运动鞋男 标准白 41FILA斐乐男鞋2018夏季新款LOGO轻便复古跑鞋运动鞋男 标准白 41",
							"sum":"1",
							"pri":"5899.00",
							"but_ddshouhuo":2,
							"but_rebuy":1,
							"but_pingjia":0,
							"but_fapiao":0,
							"but_zhifu":0,
							"but_wuliu":1,
						}
					],
					[
						{
							"logoimg": '../../static/icon-logo.png',
							"dname":"自营零食产品专营店",
							"zt":"已完成",
							"img": '../../static/pd-004.png',
							"name":"盼盼 酸梅汤 酸梅汁风味饮料 250ml*24盒 整箱 果汁饮料",
							"sum":"1",
							"pri":"21.00",
							"but_rebuy":2,
							"but_pingjia":1,
							"but_fapiao":1,
							"but_zhifu":0,
							"but_wuliu":0,
							"but_ddshouhuo":0,
						}
					],
					[
						{
							"logoimg": '../../static/icon-logo.png',
							"dname":"自营OPPO产品专营店",
							"zt":"已取消",
							"img": '../../static/pd-005.png',
							"name":"OPPO R15 全面屏双摄拍照手机 4G+128G 雪盈白 全网通 移动联通电信4G 双卡双待手机",
							"sum":"1",
							"pri":"21.00",
							"but_rebuy":2,
							"but_pingjia":1,
							"but_fapiao":1,
							"but_zhifu":0,
							"but_wuliu":0,
							"but_ddshouhuo":0,
						}
					],
				]
			}
		},
		onLoad() {
			// for (var i = 0; i < this.menuLists.length; i++) {
			// 	this.getDateList(i);
			// }
		},
		methods: {
			swichMenu: async function(current) { //点击其中一个选项
				if (this.currentTab == current) {
					return false;
				} else {
					this.currentTab = current;
					this.setScrollLeft(current);
				}
			},
			swiperChange: async function(e) {
				let index = e.target.current;
				this.setScrollLeft(index);
				this.currentTab = index;
			},
			setScrollLeft: async function(tabIndex) {
				let leftWidthSum = 0;
				for (var i = 0; i <= tabIndex; i++) {
					let nowElement = await this.getWidth('tabNum' + i);
					leftWidthSum = leftWidthSum + nowElement.width;
				}
				let winWidth = uni.getSystemInfoSync().windowWidth;
				this.scrollLeft = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
			},
			getWidth: function(id) { //得到元素的宽高
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
					}).exec();
				})
			},
			getDateList: function(tabIndex) {
				// var entity = this.menuTabs[tabIndex].name;
				// this.menuLists[tabIndex].push(entity);
			},
		}
	}
</script>

<style>
	@import '../../css/style.css';
</style>
