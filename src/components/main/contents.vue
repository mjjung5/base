<template>
    <div id="container">
        <div class="contents">
            {{mainProp}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "mainContents",
        props: ['main-prop'],
        data(){
            return{
                
            }
        },

        created(){
            console.log(this.mainProp);
        },
    }
</script>

<style>

</style>