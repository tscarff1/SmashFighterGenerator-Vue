<template>
    <div>
        <div class="header">
            
        </div>
        <div style="display:block; width:100%;">
            <div v-for="(fighter, ind) in fighters" :key="fighter.name" >
                <div class="fighter-list-item" style="width:33%; float:left;">
                    {{fighter.name}}
                    <input type="checkbox" :id="fighter.id" :value="fighter.id" v-model = "selectedIds">
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
import axios from 'axios'
export default {
    data() {
        return {
            fighters: [],
            selectedIds: []
        }
    },
    created() {
        axios.get('/data/fighters').then(
            (response) => {
                this.fighters = response.data;
                this.selectAll();
            }
        );
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
            axios.post('/random/single/in',this.selectedIds).then(
                (response) => {
                    this.$emit('select-fighter', response.data);
                }
            )
        }
    }
}
</script>

<style scoped>
    .fighter-list-item {
        color: white;
        font-size: 1.2em;
    }

    input {
        width: 20px;
        height: 20px;
        float:right;
    }
    .header {
        height: 6vh;
        background-color: #8b8b8b;
        border-bottom-style: solid;
        border-bottom-color: rgb(98, 86, 206);
        margin-bottom: 1vw;
    }
</style>


