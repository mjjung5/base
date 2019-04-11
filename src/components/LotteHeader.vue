<template>
  <div id="header">
      <div class="list">
        <ul>
            <li v-for="item in pageUI.items" :key="item.dispNo">
                <a href="#">{{item.dispNm}}</a>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      pageUI: {}
    }
  },
  created(){
    this.$http('/api/main_json_gate.do').then((res)=>{
        console.log(this.pageUI);
        this.pageUI = res.data.data;
    });
  },
  
}
</script>

<style>

</style>
