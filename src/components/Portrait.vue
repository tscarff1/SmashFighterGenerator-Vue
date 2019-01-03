<template>
<div>
    <div :class="{'desktop-portrait': !$store.state.isMobile, 'mobile-portrait': $store.state.isMobile, 'portrait': true}">
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
    .mobile-portrait {
        width: 30px;
        height: auto;
    }
    .desktop-portrait {
        height: auto;
        
        width: 350px;
        border: solid #555555 8px;
        border-radius: 15px;
        background-color: #151515;
    }

    .portrait-img {
        margin: auto;
        width: 90%;
        padding-top: 3%;
        padding-bottom: 3%;
    }

    .portrait {
        margin: auto;
    }

    .portrait-enter-active {
        transition: all 1s;
    }
</style>
