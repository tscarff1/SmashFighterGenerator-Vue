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
        width: 10%;
        height: 100%;
        border-right-color: #e8e8e8;
        border-right-width:2px;
        border-right-style: solid;
        float:left;
        z-index: 100;
    }

    button {
        width: 100%;
        background-color: transparent;
        color: #e8e8e8;
        font-size: 2rem;
        border: none;
        padding-top: 5px;
        padding-bottom: 3px;
        border-bottom-color: #e8e8e8;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }

    button:hover {
        background-color:  #8a8a8a;
    }
</style>
