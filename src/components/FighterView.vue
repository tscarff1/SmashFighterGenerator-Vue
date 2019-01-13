<template>
    <div>
        <transition name="header">
        <div class="header">
            <h2> You play: </h2>
            <h2 class="fighter-text">{{$store.getters.fighterName | uppercase}}</h2>
        </div>
        </transition>
        <div class="body">
            <Portrait></Portrait>
        </div>
    </div>
</template>

<script>
import Portrait from '@/components/Portrait.vue'
export default {
    components: {
        Portrait
    }
}
</script>

<style scoped>
    .header {
        background-color: #212121;
        color: #e8e8e8;
        text-align: center;
        width: 100%;
    }

    .body {
        width: 100%;
    }
</style>

