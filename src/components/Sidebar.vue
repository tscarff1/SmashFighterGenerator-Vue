<template>
    <div class="sidebar">
        <button @click="getRandomFighter">
            <font-awesome-icon icon="user-alt"></font-awesome-icon>
        </button>
        <button @click="showFighterList">
            <font-awesome-icon icon="list"></font-awesome-icon>
        </button>
        <button @click="showSettings">
            <font-awesome-icon icon="cog"></font-awesome-icon>
        </button>
        <button @click="showInfo">
            <font-awesome-icon icon="info-circle"></font-awesome-icon>
        </button>
    </div>    
</template>

<script>
export default {
    methods: {
        getRandomFighter() {
            this.$store.dispatch('setCurrentDisplay','FIGHTER');
        },
        showFighterList() {
            this.$store.dispatch('setCurrentDisplay','FIGHTER_LIST');
        },
        showSettings() {
            this.$store.dispatch('setCurrentDisplay','SETTINGS');
        },
        showInfo() {
            this.$store.dispatch('setCurrentDisplay','INFO');
        }
    }
}
</script>

<style scoped>
    .sidebar {
        position: absolute;
        background-color: #212121;
        color: #e8e8e8;
        width: 10vw;
        min-width: 80px;
        height: 100%;
        border-right-color:rgb(98, 86, 206);
        border-right-width:2px;
        border-right-style: solid;
        float:left;
        z-index: 100;
    }

    button {
        width: 100%;
        height: 10vh;
        min-height: 60px;
        background-color: transparent;
        color: #e8e8e8;
        font-size: 2rem;
        border: none;
        padding-top: 5px;
        padding-bottom: 3px;
        border-bottom-color:rgb(108, 55, 177);
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    button:hover {
        background-color:  #8a8a8a;
    }
</style>
