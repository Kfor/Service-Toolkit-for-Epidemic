 <template>
	 <view class="mask">
	 	<view>
	 		<view class="search-block">
	 			<view class="search-ico-wapper">
	 				<text class="list-icon">&#59264;</text>
	 			</view>
	 			<view>
	 				<input type="text" class="search-text" name="" id="" placeholder="输入口罩号码" v-model="search"/>
	 			</view>
	 			<view class="search-ico-wapper1">
	 				<!-- <button @click="btn">搜索</button> -->
					<text @click="btn" class="list-icon">&#59264;</text>
	 			</view>
	 		</view>
	 	</view>
		<div>
			<ul v-for="list in searchData">
				<li>
					<span>{{list.name}}</span>
					<span>{{list.date}}</span>
				</li>
			</ul>
		</div>
	 </view>
   
 </template>
  
 <script>
 export default {
   name: 'HelloWorld',
   data () {
     return {
     	search:'',
     	searchData: '',
 			products:[
         //假数据
         {name:"鲁械注准20162640493",date:'一次性使用医用外科口罩'},
         {name:"赣械注准20192140150",date:'一次性使用口罩'},
		 {name:"豫械注准20172640230",date:'一次性使用医用口罩'}
     	]
     }
   },
   methods:{
   	btn:function(){
   		
   		var search = this.search;
 			if (search) {
 			 this.searchData =  this.products.filter(function(product) {
 			 	console.log(product)
 				return Object.keys(product).some(function(key) {
 					console.log(key)
 			  	return String(product[key]).toLowerCase().indexOf(search) > -1
 			})
 			})
 			}
 			
   	}
   }
 }
 </script>
 
 <style>
 .mask {
 	margin-top: 150upx;
 }
 .search {
 	background-color: #aaaaff;
 	width: 100%;
 	height: 200upx;
 }
  
 .list-icon {
      width: 40upx;
      height: 40upx;
 	 margin-left: 30upx;
 	 margin-top: -45upx;
  }
  
  .search-text{
      font-size: 14px;
      background-color: #ffffff;
      height: 60upx;
      width: 480upx;
  }
  .search-block{
      display: flex;
      flex-direction: row;
      padding-left: 60upx;
      position: absolute;
      top: 50upx;
  }
  .search-ico-wapper{
      background-color: #FFFFFF;
      display: flex;
      flex-direction:column;
      justify-content: center;
      border-bottom-left-radius:18px;
      border-top-left-radius: 18px;
  }
  .search-ico-wapper1{
       background-color: #FFFFFF;
       display: flex;
       flex-direction:column;
       justify-content: center;
       border-bottom-right-radius:18px;
       border-top-right-radius: 18px;
   }
   
 </style>
 