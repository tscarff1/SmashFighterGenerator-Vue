<template>
<div>
    <div class="portrait-border">
        <transition name="portrait">
            <img v-if="showImg" alt="Selected Fighter" :src="getPortraitUrl" class="portrait-img">
        </transition>
    </div>
</div>
</template>

<script>
export default {
    props: {
       isMobile: Boolean
    },
    data() {
        return {
            showImg: true
        }
    },
    computed: {
        getPortraitUrl() {
            return this.$store.getters.portraitUrl;
        }
    }

}
</script>

<style scoped>
    .portrait-border {
        width: 20vw;
        min-width: 170px;
        height: auto;
        margin: auto;
        
        border: solid #555555 8px;
        border-radius: 15px;
        background-color: #151515;
    }

    

    .portrait-img {
        margin: auto;
        width:19vw;min-width: 150px;
        padding-top: 3%;
        padding-bottom: 3%;
    }


</style>
