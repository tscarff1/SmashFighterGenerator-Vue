<template>
    <div>
        <div class="header">

            <div class="header-item">
                <input type="checkbox" class="header-checkbox"> 
                <label style="margin-top:">Group By Series</label>
            </div>
            <div class="header-item">
                <button class="header-button">Select All</button>
            </div>
        </div>
        <div style="display:block; width:100%;">
            <div v-for="fighter in fighters" :key="fighter.name" >
                <div class="fighter-list-item" style="width:33%; float:left;">
                    {{fighter.name}}
                    <input class="list-checkbox" type="checkbox" :id="fighter.id" :value="fighter.id" v-model = "selectedIds">
                </div>
            </div>
        </div>
        <br />
        <div style="display:block; width:100%;">
            <button @click="deselectAll">Deselect All</button>
            <button @click="selectAll">Select All</button>
            <button @click="getFighterInSelectedIds">Submit</button>
        </div>
    </div>
</template>

<script>
import  fighterList from '@/assets/data/fighters.json';
export default {
    data() {
        return {
            fighters: fighterList,
            selectedIds: []
        }
    },
    created() {
        // eslint-disable-next-line no-console
        console.log(this.fighters);
    },
    methods: {
        selectAll() {
            for(var ind in this.fighters) {
                    this.selectedIds.push(this.fighters[ind].id);
                }
        },
        deselectAll() {
            this.selectedIds = [];
        },
        getFighterInSelectedIds() {
            let randomId = Math.floor(Math.random() * this.selectedIds.length);
            this.$store.commit('setFighter', this.fighters[randomId]);
        }
    }
}
</script>

<style scoped>
    .fighter-list-item {
        color: white;
        font-size: 1.2em;
    }

    .list-checkbox {
        width: 20px;
        height: 20px;
        float:right;
    }
    .header {
        height: 5vh;
        background-color: #b4b4b4;
        border-bottom-style: solid;
        border-bottom-color: rgb(98, 86, 206);
        margin-bottom: 1vw;
        font-size: 1.3em;
    }

    .header-checkbox {
        margin-top: 5px;
        width: 20px;
        height: 20px;
    }

    .header-item {
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
    }

    .header-button {
        border-radius: 5px;
        font-size: 1em;
    }
</style>


