<template>
   <div>
      <Headers :title="title" :isShow="false"/>
      <section>
         <div class="operation" v-if="timeData.length>0">
            <span>{{ isSetUp? '已设置'+timeData.length :'管理定时' }}</span>
            <a @click="optionFn">{{ isSetUp?'管理':'完成' }}</a>
         </div>
         <ul class="time-list" v-if="timeData.length>0">
            <li :key="index" v-for="(item,index) in timeData">
               <div class="left-text">
                  <time @click="editDateFn(item)"> {{ item.openTime }} </time>
                  <p><i class="bgColor-blue"></i><span>{{item.status?'开启':'关闭'}}</span>
                     <span>{{initWeek(item.period)}}</span>
                  </p>
               </div>
               <div v-if="isSetUp" @click="openCloseFn(item.status,index)" :class="item.status?'open-icon':'close-icon'"></div>
               <div v-else class="delete-icon" @click="deleteDateFn(index)"></div>
            </li>
         </ul>
         <div v-else class="no-timeing"><span>未设置定时</span></div>     
      </section>

      <footer>
         <!-- <router-link class="add-btn" :to="{path:'/addTime/', query:{data:timeData}}"></router-link> -->
         <button class="add-btn" @click="addDateFn"></button>
      </footer>

      <Tips :isShow="isShowTip" msg="没有设置时间，保存后将删除此条定时" @confirmEvent="tipsOkFn" @cancelEvent="tipsNoFn"/>
   </div>
</template>

<script>
import Headers from "./Headers.vue";
import TimeData from "../data/timeData.json";

import Tips from "./tips.vue";

export default {
  name: "timing",
  components : {
     Headers,
     Tips
  },
  data() {
      return {
         a:true,
         library_id : this.$route.query.library_id,
         title : "定时",
         isSetUp : true,  //是否已经设置  true设置
         isOpen : true, //是否开启，默认开启true
         timeData : TimeData, // 时间数据假data 
         isShowTip:false, //子组件提示
         key:0
      }
  },

  methods : {

      optionFn(){   //管理||完成切换方法
         this.isSetUp = !this.isSetUp;
      },
      openCloseFn(status,index){ //开启关闭
         if(status){
            this.timeData[index]["status"]=false;//修改本地json数据
         }else{
            this.timeData[index]["status"]=true;
         }
      },

      tipsOkFn(propsData){ //子传父，删除定时
         this.isShowTip = propsData;
         this.timeData.splice(this.key,1);
      },
      tipsNoFn(propsData){ //子传父，取消
          this.isShowTip = propsData;
      },
      deleteDateFn(index){  //删除定时
         this.isShowTip = true;
         this.key = index;//把要删除的定时索引存下来
      },


      editDateFn(item){ //编辑定时
         console.log('开始编辑定时');  
         this.$router.push({ name: 'AddTime', params: { data: item ,proStatus:'edit'}})
      },
      addDateFn(){//添加定时
         console.log('开始添加定时');  
         this.$router.push({ name: 'AddTime', params: {proStatus:'add'}})
      },
      initWeek(period){ //星期处理
         let result = [];
         for(let i=0,len=period.length;i<len;i+=1){
             result.push('周'+period.slice(i,i+1));
         }
        if(result.length===7){
            return '每天'
         }else if(result.length===2&result.indexOf('周六')>-1&result.indexOf('周日')>-1){
            return '周末'
         }else if(result.length===5&result.indexOf('周六')===-1&result.indexOf('周日')===-1){
            return '工作日'
         }else{
            return result.join(' ');
         }
      }
  }
};



</script>

<style lang="less" scoped>
*{
   margin:0;
   padding:0;
}
header{
   border-bottom:1px solid #e4e4e4;
   background-color: #fff !important;
   color:#000 !important;
}

section{
   position: fixed;
   overflow: auto;
   width:100%;
   left:0;
   top:.86rem;
   bottom:2.56rem;
   .operation{
      height:1.06rem;
      padding:0 .26rem;
      span{
         font-size:.38rem;
         width:46%;
         height:100%;
         display: block;
         float:left;
         text-align: left;
         line-height: 1.06rem;
      }
      a{
         font-size:.24rem;
         color:#fff;
         width:.8rem;
         height:.38rem;
         line-height:.4rem;
         display: inline;
         background-color:#5ee3ec;
         border-radius: .51rem;
         float:right;
         margin-top:.34rem;
      }
   }
   .no-timeing{  //andlink_img_noclock
      width:100%;
      height:100%;
      background: url("../assets/andlink_img_noclock.png") center 40% no-repeat;
      span{
         font-size:.24rem;
         color:#b2b2b2; 
         display: block;
         width:100%;
         text-align: center;
         position: absolute;
         top:40%;
         margin-top:2.22rem
      }
   }
}
.time-list{
   padding:0 .26rem;
   margin:0;
   li{
      height:1.4rem;
      // border-bottom:1px solid #f2f2f2;
      border-bottom:1px solid #f2f2f2;
      margin:.1rem 0;
      .left-text{
         width:60%;
         height:100%;
         float:left;
         text-align: left;
         time{
            font-size:.51rem;
            display: block;
            margin-top:.24rem;
         }
         p{
            font-size:.27rem;
            line-height:.6rem;
            span{
               padding-right:.17rem;
            }
            i{
               width:.14rem;
               height:.14rem;
               display: inline-block;
               margin-right:.14rem;
               border-radius: 50%;
            }
            i.bgColor-gray{
               background-color: #b2b2b2;
            }
            i.bgColor-blue{
               background-color: #5ee3ec;
            }
         }
      }
      div:nth-child(2){
         width:.92rem;
         height:.61rem;
         // line-height:.7rem;
         // margin-top:.35rem;
         float:right;
         text-align: right;
         // background: url("../assets/comon_icon_on.png") center no-repeat;
         margin-top:.41rem;
      }
      div:nth-child(3){
         width:.92rem;
         height:.61rem;
         // line-height:.7rem;
         // margin-top:.35rem;
         float:right;
         text-align: right;
         // background: url("../assets/comon_icon_on.png") center no-repeat;
         margin-top:.41rem;
      }
   
      .delete-icon{
         background: url("../assets/andlink_icon_del_nor@2x.png") right center no-repeat;
         width:.62rem !important;
      }
      .open-icon{
         background: url("../assets/comon_icon_on.png") center no-repeat;
         background-size:cover; 
      }
      .close-icon{
         background: url("../assets/comon_icon_off.png") center no-repeat;
         background-size:cover; 
      }
   }
   li:last-child{
      border-bottom:none;
   }
}


footer{
   position: fixed;
   width: 100%;
   height: 2.56rem;
   left: 0;
   bottom: 0;
   .add-btn{
      width:.85rem;
      height:.85rem;
      border:none;
      display:block;
      border-radius:50%;
      background:url(../assets/andlink_icon_addtime.png) center no-repeat;
      background-size:cover;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -.425rem;
      margin-top: -.425rem;
   }
}

</style>


