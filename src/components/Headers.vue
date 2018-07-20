<template>
   <header :class="headerBg?'headerbg':''">
      <div class="left_btn" @click="goback"><i :class="{before:isShow}"></i></div>
      <div class="center_title">{{ title }}</div>
      <div class="right_btn" v-if="isShow">
         <p>
            <span></span>
            <span></span>
            <span></span>
         </p>
      </div>

     

   </header>
</template>

<script>

export default {
  name: "headers",
  props: ["title", "isShow","headerBg"],
  data() {
     return{
        
     }
  },
  methods: {
    goback() {
      this.$router.goBack();
    }
  }
};


</script>

<style lang="less" scoped>



header {
  position: fixed;
  width: 100%;
  height: 0.86rem;
  background-color: #545961;
  left: 0;
  top: 0;
  display: flex;
  color: #fff;
  .left_btn {
      width: 1rem;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      i{
         position: absolute;
         left: .3rem;
         top: .3rem;
      }
      i::after {
         content: "";
         display: block;
         width: 0.25rem;
         height: 0.25rem;
         border-right: 1px solid #8a8a8a;
         border-top: 1px solid #8a8a8a;
         transform: rotate(225deg);
      }
      .before::after{
         border-right: 1px solid #ffffff;
         border-top: 1px solid #ffffff;
      }
      
   }



  .center_title {
      text-align: center;
      line-height: 0.86rem;
      font-size: 0.3rem;
      position: absolute;
      overflow: auto;
      left: 1rem;
      right: 1rem;
      top: 0;
  }
  .right_btn {
    width: 1rem;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    // background: url('../../images/Group_2Icon.png') center .26rem no-repeat;
    p {
      width: 1.02rem;
      height: 0.14rem;
      position: absolute;
      right: 0.26rem;
      top: 50%;
    }
    span {
      width: 0.1rem;
      height: 0.1rem;
      background-color: #fff;
      display: block;
      float: right;
      margin-left: 0.1rem;
      border-radius: 50%;
    }
  }
}

.headerbg{
   background-color: #84e196;
}
</style>

