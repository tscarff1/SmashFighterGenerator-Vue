<template>
    <div>
        
        <button class="refresh-button" @click="$store.dispatch('generateFighter')"><font-awesome-icon icon="redo"></font-awesome-icon></button>
        <div class="header">
            <h2> You play: </h2>
            <h2 class="fighter-text">{{fighterNameUpper}}</h2>
        </div>
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
    },
    computed: {
        fighterNameUpper() {
            if(this.$store.getters.fighterName == null)
                return "";
            else
                return this.$store.getters.fighterName.toUpperCase();
        }
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

    .fighter-text {
        white-space: nowrap;
    }

    .refresh-button {
        position: absolute;
        left: 0;
        top: 0;
        width: 6vw;
        min-width: 50px;
        height: 5vw;
        min-height: 50px;
    }
/* Handle refresh button on different screen sizes*/
@media only screen and (max-width: 320px) {
  .refresh-button {
        width: 60px;
        height: 60px;
        font-size: 8vw;
    }
}

@media only screen and (min-width: 321px) {
  .refresh-button {
        
        width: 7vw;
        height: 7vw;
        font-size: 4.5vw;
    }
}

.refresh-button {
    position: absolute;
        left: 0;
        top: 0;
        border-radius: 0 15px 15px 15px;
        background-color: #64646423;
        color: rgba(255, 255, 255, 0.438);
        border-color:rgb(108, 55, 177);
}

.refresh-button :hover {
    border-style:solid;
    border-radius: 50%;
    border-color:rgb(98, 86, 206);
    color: white;
    background-color: rgb(98, 86, 206);
}

.refresh-button :active {
    margin-top: 5px;
    margin-left: 5px;
}
</style>

