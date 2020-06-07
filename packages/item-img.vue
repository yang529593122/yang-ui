<template>
	<div class="yl-item-imgbox">
		<a class="yl-item-href" @click="handleClick">
			<img class="yl-item-img" :src="imgurl" alt="">
		</a>
		<div class="yl-item-mess">{{ title }}</div>
	</div>
</template>

<script>
	export default{
		name:"YlItemImg",
		props:{
			imgurl:{
				type:String,
				default:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=537619302,2157304229&fm=11&gp=0.jpg"
			},
			title:{
				type:String,
				default:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=537619302,2157304229&fm=11&gp=0.jpg"
			}
		},
		methods:{
			handleClick(e){
				this.$emit("handleClick",e)
			}
		}
	}
</script>

<style scoped lang="scss">
	.yl-item-imgbox{
		width: 100%;
		position: relative;
		.yl-item-img{
			display: block;
			width: 100%;
			height: 100%;
		}
		.yl-item-mess{
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			height: 50px;
			background: rgba(0,0,0,.7);
			line-height: 50px;
			color: #fff;
			padding: 0 10px;
			box-sizing: border-box;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
		}
	}
	
</style>
