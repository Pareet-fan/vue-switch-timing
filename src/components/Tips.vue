<template>
   <div>
      <div class="isMask" v-show="isShow"></div>
      <div :class="{activeClass:isShow,'toast-box':true}">
         <div class="tips">
            <p>{{msg?msg:'没有设置时间，保存后将删除此条定时'}}</p>
            <a class="confirm-btn" @click="confirmFn">删除定时</a>
         </div>
         <a class="cancel-btn" @click="cancelFn">取消</a>
      </div>
   </div>
</template>


<script>
export default {
   name: "tips",
   props: ["msg", "isShow"],  //接收父组件传来的参数
   data() {
      return {
      };
   },
   created(){
   },
   beforeMount(){
   
   },
   methods:{
      confirmFn(){
         this.$emit('confirmEvent',false);
      },
      cancelFn(){
         this.$emit('cancelEvent',false);
      }
   }
};
</script>


<style lang="less" scoped>
.isMask {
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
}


.activeClass{
   bottom:0rem !important;
}
.toast-box {
  position: fixed;
  left: 0;
  bottom:-2.8rem;
  z-index: 100; //-2.34rem
  width: 100%;
  transition: bottom 500ms;
  -webkit-transition:bottom 500ms;
  a {
    display: block;
    background-color: #ffffff;
    line-height: 0.85rem;
  }
  .tips {
    background-color: #ffffff;
    padding: 0.09rem 0;
    p {
      font-size: 0.27rem;
      line-height: 0.79rem;
      color: #8c8c8c;
    }
    .confirm-btn {
      background-color: #ffffff;
      color: red;
      font-size: 0.34rem;
    }
  }
  .cancel-btn {
    margin-top: 0.1rem;
    font-size: 0.31rem;
  }
}
</style>


