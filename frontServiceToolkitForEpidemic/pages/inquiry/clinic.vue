<template>
    <view>
        <!-- 地图 -->
            <map :latitude="latitude"
            :longitude="longitude"
            style="width: 100%; height: 1500rpx;"
            scale="11" 
            :markers="markers"
            :show-location="true"
            @markertap="markertap"
            @updated='mapUpdated'
            @tap='closeMapMarker'
            >
            </map>
        <!--  -->
    </view>
</template>

<script>
    import amap from "../../common/amap-wx.js";

    export default {
        data() {
            return {
                // 
                longitude: 115.45875,
                latitude: 38.87757,
                mapInfo: [],
                markers: [],
                mapKey: '2f5730d27f70e358baa637faf1125d1c'　　　　//　　测试
            }
        },
        created() {
            console.log('created=============map')
        },
        onLoad() {
            console.log('onLoad---');
            //
            this.amapPlugin = new amap.AMapWX({
                key: this.mapKey  //该key 是在高德中申请的微信小程序key
            });

            const that = this
            that.amapPlugin.getRegeo({
                type: 'gcj02', //map 组件使用的经纬度是国测局坐标， type 为 gcj02
                success: function(res) {
                    console.log('map 组件使用的经纬度是国测局坐标， type 为 gcj02')
                    console.log(res[0])
                    const latitude = res[0].latitude;
                    const longitude = res[0].longitude;
                    that.longitude = longitude;
                    that.latitude = latitude;
                    that.mapInfo=res[0];
                },
                fail: (res) => {
                    console.log(JSON.stringify(res));
                }
            });
            //    增加地图标注    
            this.mapMarkers()
        },
        onShow() {
            console.log('show')
        },
        methods:{
            mapMarkers(){
                console.log('markers')
                this.markers = [
                    {
                        id:1001,
                        longitude: '115.45875',
                        latitude: '38.87757',
                        title: '车享汇加油站',
                        // iconPath: 'http://api.myphp.vip/logo.png',
                        iconPath: '/static/icon/map_jiayouicon.png',
                        width: '73rpx',
                        height: '87rpx',
                        callout: {
                            content: '中国石化加油站 686m',
                            color: '#9bf',
                            fontSize: '30rpx',
                            bgColor: 'red',
                            padding: '30rpx',
                            
                        },
                        label: {
                            content: '中国石化加油站 686m',
                            color:'#fff',
                            padding: '10',
                            textAlign: 'center',
                            borderColor: 'red',
                            bgColor: '#ccc',
                            x: '350px',
                            y: '0',
                            opacity:'0.4'
                        }
                    }
                ]
            },
            //    点击标记时触发
            markertap(){
                console.log('markertap点击标记时触发')
            },
            //mapUpdated
            mapUpdated(){
                console.log('mapUpdated----------在地图渲染更新完成时触发')
            },
            //
            closeMapMarker(){
                console.log('closeMapMarker----------点击地图时触发; App-nuve、微信小程序2.9支持返回经纬度')
            },
            
            //
        }
    }
</script>

<style>
	
</style>