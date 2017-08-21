<template>
  <div id="positioning">
  	<mt-header fixed> 
  	  <mt-button slot="left">高仿ele</mt-button>
	  <router-link to="/login" slot="right">
	    <mt-button >登录|</mt-button>
	  </router-link>
	  <router-link to="/registered" slot="right">
	    <mt-button >注册</mt-button>
	  </router-link>
  	</mt-header>
  	<nav class="cityLocation">
  	  <div class="cityTips">
  	    <span>当前定位城市：</span>
  	    <span>定位不准时，请在城市列表中选择</span>
  	    <div class="clear"></div>
  	  </div>
  	  <router-link to="changCity" class="guess_city">
  	    <div class="city clearfix">  	    	
  	      <span>{{guessCity}}</span> 	  	 
  	      <icon name="angle-right" scale="1.5" class="float_right" ></icon>  	    	  	    
  	    </div>
  	  </router-link>  
  	</nav>
  	<table class="hotCity" >
  	  <tr><td>热门城市</td></tr>
  	  <tr v-for="item in HotCityList"><td>{{item}}</td></tr>
  	</table>
  </div>
  
</template>
<script>
import Vue from 'vue'
import {api} from '../global/api';
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

export default{
  data(){
	return{
		guessCity:'广州',
		HotCityList:[],
	}
  },
  methods:{
  	    getData(){
  	    	this.$http.get(api.getHotCityList).then(response => {

  	    		var data = response.data.data;
  	    		console.log(data);

  	    		this.HotCityList = data;

  			
  			}, response => {
  			    // error callback
  			    alert("加载data-foodlist.json文件失败");
  			});
  	    },
  }
}

</script>
<style>
.clearfix{
  overflow:auto;
}
.float_right{
  float:right;
}
#positioning .mint-header{
  height: 1.95rem;
}
#positioning .mint-header .mint-button{
  font-size:  .65rem;
}
#positioning .cityLocation{
  margin-bottom: .4rem;
  padding-top: 2.35rem;

}
#positioning .cityLocation span:nth-child(1){
  float:left;
  color: #666;
  font-size: .55rem;
}
#positioning .cityLocation span:nth-child(2){
  float: right;
  color: #9f9f9f;
  font-weight:900;
  font-size: .475rem
}
.clear{
  clear: both;
}
#positioning .cityLocation .cityTips{
  padding: 0 10px;
  border-bottom: 1px solid #e4e4e4;
  line-height: 1.45rem;
}
#positioning .city{
  padding: 0.35rem 10px;
  color:#9f9f9f;
  border-bottom: 2px solid #e4e4e4;
 
}
#positioning .city .guess_city span{
  font-weight: 400;
  font-size: 0.65rem;
  color:#3190e8;
}
.fa-icon{
	color:#9f9f9f!important;
}
#positioning .hotCity{
  font-size:0.5rem;
  color:#666;
}
</style>