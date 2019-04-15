<template>
  <div id="wrap">
      <LotteHeader></LotteHeader>
      {{contData}}
  </div>
</template>

<script>
import eventBus from '@/EventBus'
import '@/css/common.css'
import LotteHeader from '@/components/LotteHeader.vue';

export default {
    name: 'LotteMain',
    data(){
        return{
            contData: {}
        }
    },
    components: {
        LotteHeader
    },

    created(){
        eventBus.$on("contData", (data) => {
            this.contData = data;
        });
    },

    methods: {

    }

}
</script>

<style>

</style>
