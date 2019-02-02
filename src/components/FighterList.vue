<template>
    <div>
        <div class="header">
            <div class="header-item">
                <button class="header-button" v-if="!allSelected" @click="selectAll">Select All</button>
                <button class="header-button" v-if="allSelected" @click="deselectAll">Deselect All</button> 
            </div>
        </div>
        <div class="body">
            <div v-for="fighter in $store.state.allFighters" :key="fighter.name" >
                <div class="fighter-list-item">
                    <fighter-select :id="fighter.id" :value="fighter.id" v-model="selectedIds" :text="fighter.name">

                    </fighter-select>
                </div>
            </div>
            <div style="margin-bottom: 100px; height: 200px; width: 100%"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import FighterSelect from './FighterSelect';
export default {
    components: {
        FighterSelect
    },
    data() {
        return {
            fighters: [],
            selectedIds: this.$store.state.selectedFighters
        }
    },
    created() {
        this.fighters = this.$store.state.allFighters;
        this.fighters = this.$store.state.selectedFighters;
    },
    methods: {
        selectAll() {
            //Start by clearing out the selected ids to prevent adding multiple
            this.selectedIds = [];
            for(var ind in this.$store.state.allFighters) {
                this.selectedIds.push(this.$store.state.allFighters[ind].id);
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
    },
    watch: {
        selectedIds: function(newList) {
            this.$store.dispatch('setSelectedFighters', newList);
        }
    },
    computed: {
        allSelected() {
            return this.selectedIds.length == this.$store.state.allFighters.length;
        },
    }
    
}
</script>

<style scoped>
    .fighter-list-item {
        margin-bottom: 10px;
        width: 100%;
        float: left;
    }

    .body {
            height: 90vh;
            overflow-y: auto;
        }

    @media only screen and (min-width: 800px) {
        .fighter-list-item {
            width: 33%;
            float: left;
        }

        .body {
            height: 90vh;
            overflow-y: auto;
        }
    }

    .header {
        height: 5vh;
        min-height: 35px;
        background-color: #b4b4b4;
        border-bottom-style: solid;
        border-bottom-color: rgb(98, 86, 206);
        margin-bottom: 1vw;
        font-size: 1.3em;
        padding-top: 5px;
    }

    .header-checkbox {
        margin-top: 5px;
        padding-top: 5px;
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


