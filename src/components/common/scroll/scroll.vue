<template>
	<div class="wrapper" ref='wrapper'>
    <div>
      <slot></slot>
    </div>
	</div>
</template>

<script>
  import BScroll from 'better-scroll'
	export default {
		name:'scroll',
    data(){
      return{
        scroll:null
      }
    },
    props:{
      probetype:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    mounted(){
      this.scroll=new BScroll(this.$refs.wrapper,{
        probeType:this.probetype,
        pullUpLoad:this.pullUpLoad,
        click:true
      })
      if(this.probetype===2||this.probetype===3){
      this.scroll.on('scroll',(position)=>{
       this.$emit('scroll',position)
      })
      }
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullup')
      })
    },
    methods:{
      scrollTo(x,y,time=500){
        this.scroll.scrollTo(x,y,time)
      },
      refresh(){
        this.scroll.refresh()
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      }
    }
	}
</script>

<style>
</style>
