<template>
    <div class="content">
        <div class="room"></div>
        <div class="room-list"></div>
        <div class="message">hh</div>

        <form id="send-form">
            <input class="send-message"/>
            <input class="send-button" type="submit" value="Send"/>
        </form>
    </div>
</template>

<script>

export default {
  data(){
      return{
      }
  },
  computed:{
  },
  created:function(){
  },
  methods:{
  }
}
</script>
<style>
.content{
    width:800px;
    margin:50px auto;
}
.room{
    background-color:#ddd;
    margin-bottom:10px;
}
.message{
    width:690px;
    height:300px;
    overflow:auto;
    background:#eee;
    margin-bottom:10px;
    margin-right:10px;
}
</style>