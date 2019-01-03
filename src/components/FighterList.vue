<template>
    <div style="border: 2px solid red; padding: 5px">
        <div style="display:block; width:100%; overflow-y:hidden">
            <div v-for="(fighter, ind) in fighters" :key="fighter.name" >
                <div style="width:33%; float:left;">
                    {{fighter.name}}
                    <input type="checkbox" :id="fighter.id" :value="fighter.id" v-model = "selectedIds">
                </div>
                <!-- This is just to end the row -->
                    <div v-if="ind == fighters.length - 1 && ind % 3 == 1" style="float: left; width: 66%"></div>
                    <div v-if="ind == fighters.length - 1 && ind % 3 == 2" style="float: left; width: 33%"></div>
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


