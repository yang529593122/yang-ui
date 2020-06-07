<template>
  <div id="app">
	<YlItemImg :imgurl="imgurl" :title="nihao" @handleClick="handleClick"></YlItemImg>
	
  </div>
</template>

<script>

export default {
	data(){
		return {
			imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591547802531&di=4a4d7bd5db3cfd591a0f01c87c699040&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1793520972%2C101544025%26fm%3D193",
			title:"美女图片标题"
		}
	},
	methods:{
		handleClick(){
			console.log(1)
		},
	}
}
</script>

<style lang="scss">
</style>
