<template>
   <div>
      <Headers :title="title" :isShow='false'/>
   </div>
</template>

<script>
import Headers from "./headers.vue";
import Tips from "./tips.vue";

export default {
  name: "addTime",
  components: {
    Headers,
  },
  data() {
    return {
      title: "添加定时",
    };
  },

};
</script>
<style lang="less" scoped>
header {
  border-bottom: 1px solid #e4e4e4;
   .left_btn{
      i::after {
         border-right: 1px solid #ffffff !important;
         border-top: 1px solid #ffffff !important;
      }
   }
  
}
</style>