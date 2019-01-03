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
            var url = require.context('../assets/portaits/', false, /\.jpg$/);
            //This cleans out any spaces or periods
            //var name = this.fighter.name.split('.').join('').split(' ').join('').split('-').join('');
            return url('./SmashUlt_' + 'Lucario'+ '.jpg');
        }
    },
    watch: {
        fighter(val) {
            setTimeout(500,() => {
                this.showImg=true;
            }); 
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
