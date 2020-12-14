<template>
      <div class="tab-bar-item" @click="itemClick">
          <div v-if="!isActive"><slot  name="item-icon"></slot></div>
          <div v-else><slot name="item-icon-active"></slot></div>
          <div :class="{active:isActive}"><slot name="item-text"></slot></div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            
        };
    },
    methods: {
        itemClick(){
            this.$router.replace(this.path) ;
            console.log(this.path);
        }
    },
    props:{
        path:{type:String}
    },
    computed:{
        isActive(){
           return this.$route.path.indexOf(this.path) == -1
        }
    }
};
</script>

<style>
.tab-bar-item{
  flex:1;
  text-align: center;
  height: 49px;
  
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
}
.active{
    color: red;
}
</style>
