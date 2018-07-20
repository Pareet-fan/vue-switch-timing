<template>
   <div id="index">
      <Headers :title="title" :isShow="true" :headerBg="isOk"/>
      <section :class="isOk?'bgColor-green':'bgColor-gray'">
        <div class="box">
           <img src="../assets/hardware_icon_socket_normal.png">
           <div class="text-p">
              <p><span v-show="!isOk">——</span></p>
              <p>{{ isOk?'电源已开启':'电源已关闭' }}</p>
           </div>
        </div>
      </section>
      <footer>
        <!-- <router-link to="timing"></router-link> -->
        <div class="btns">
            <div>  
               <a @click="switchBtn" :class="isOk?'btn-a-green':'btn--a-gray'"></a>
               <span :class="isOk?'btn-green':'btn-gray'">开关</span>
            </div>
            <div>
               <!-- <router-link :to="{path:'timing/', query:{library_id:1}}" :class="isOkTimIng?'timing-a-green':'timing-a-gray'"></router-link> -->
               <router-link :to="{path:'timing/', query:{library_id:1}}" :class="isOkTimIng?'timing-a-green':'timing-a-gray'"></router-link>
               <span :class="isOkTimIng?'btn-green':'btn-gray'">定时</span>
            </div>
         </div>

      </footer>
   </div>   
</template>

<script>
import Headers from "./Headers.vue";

export default {
   name : 'index',
   components: {
      Headers
   },
   data(){
      return{
         isOk: false, //控制开关
         isOkTimIng: false, //控制定时的开关
         title: "智能插座", //公用組件headers的title
      }
   },
   methods: {
      switchBtn() {
         //开关fn
         this.isOk = !this.isOk;
      }
  }
}
</script>


<style lang="less" scoped>
header {
  border-bottom-width: 1px;
  border-bottom:1px solid #545961;
}

section {
  width: 100%;
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0.86rem;
  bottom: 2.56rem;
  .box {
    width: 6rem ;
    height: 6rem;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -3rem;
    margin-top: -3rem;
    .text-p {
      padding-top: 0.51rem;
      p {
        height: 0.68rem;
        font-size: 0.31rem;
        color: #fff;
        line-height: 0.68rem;
      }
    }
  }
}
section.bgColor-gray {
  background: -webkit-linear-gradient(
    #545961,
    #484e55,
    #3c4148,
    #343940,
    #2e343a
  );
}
section.bgColor-green {
  background: -webkit-linear-gradient(
    #84e196,
    #84e196,
    #6cd89e,
    #52cea6,
    #36c2af
  );
}
footer {
  position: fixed;
  width: 100%;
  height: 2.56rem;
  left: 0;
  bottom: 0;
  .btns {
    width: 3.24rem;
    height: 100%;
    margin: 0 auto;
    div {
      width: 1.14rem;
      height: 100%;
      text-align: center;
      a {
        display: block;
        width: 1.18rem;
        height: 1.18rem;
        margin-top: 0.41rem;
        background-position: center center;
        background-size: 1.18rem 1.18rem;
        background-repeat: no-repeat;
      }
      .btn-a-green {
        background-image: url("../assets/hardware_btn_socket_button_pressed.png");
      }
      .btn--a-gray {
        background-image: url("../assets/hardware_btn_socket_button_disabled@2x.png");
      }
      span {
        font-size: 0.31rem;
        display: block;
        margin-top: 0.2rem;
      }
      .timing-a-green {                
         background-image: url("../assets/hardware_btn_socket_timing_pressed@2x.png");
      }
      .timing-a-gray {
         background-image: url("../assets/hardware_btn_socket_timing_disabled@2x.png");
      }
      span.btn-gray {
        color: #8c8c8c;
      }
      span.btn-green {
        color: #36c2af;
      }
    }
    div:nth-child(1) {
      float: left;
    }
    div:nth-child(2) {
      float: right;
    }
  }
}
</style>