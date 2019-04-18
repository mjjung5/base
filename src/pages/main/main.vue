<template>
  <div id="wrap">
      <LotteHeader></LotteHeader>
      <Contents :main-prop="contData"></Contents>
  </div>
</template>

<script>
import eventBus from '@/EventBus';
import '@/css/common.css';
const LotteHeader = () => import('@/components/common/LotteHeader.vue');
import Contents from '@/components/main/contents.vue';

export default {
    name: 'LotteMain',
    data(){
        return{
            contData: {}
        }
    },
    components: {
        LotteHeader,
        Contents
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
