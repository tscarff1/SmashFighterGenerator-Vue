<template>
    <div>
        <div class="view-header">
            <div class="view-header-item">
                <label >Select Fighters</label>
            </div>
        </div>
        <div style="height:100%; overflow:hidden; margin:0;">
            <div class="list-body">
            <div v-if="view == 'SERIES'">
                <series-select v-for="series of allSeries" :key="series.id" :series="series"></series-select>
            </div>
            <div v-if="view == 'FIGHTERS'">
                <div v-for="fighter in fighters" :key="fighter.name" class="fighter-list-item" >
                        <fighter-select :id="fighter.id" :fighterId="fighter.id" v-model="$store.state.selectedFighterIds" :text="fighter.name"> </fighter-select>
                </div>
            </div>
            </div>
        </div>
        <br />
        <div class="footer">
            <div>
                <button @click="deselectAll" class="footer-button">Deselect All</button>
                <button @click="selectAll" class="footer-button">Select All</button>
            </div>
        </div>
    </div>
</template>

<script>
import  fighterList from '@/assets/data/fighters.json';
import  seriesList from '@/assets/data/series.json';
import FighterSelect from '@/components/FighterSelect';
import SeriesSelect from '@/components/SeriesSelect';
export default {
    components: {
        FighterSelect,
        SeriesSelect
    },
    data() {
        return {
            fighters: fighterList,
            selectedIds: [],
            allSeries: seriesList,
            view: 'SERIES'
        }
    },
    methods: {
        selectAll() {
            this.$store.dispatch('selectAllFighters');
        },
        deselectAll() {
            this.$store.dispatch('setSelectedFighterIds', []);
        }
    }
}
</script>

<style scoped>
    .fighter-list-item {
        color: white;
        font-size: 1.2em;
        margin-bottom: 5px;
    }


    .list-checkbox {
        width: 20px;
        height: 20px;
        float:right;
    }

    .list-body {
        display: block;
        overflow-y: auto;
        overflow-x:hidden;
        position: fixed;
        bottom: 45px;
        right: 0px;
    }

    /* Handle refresh button on different screen sizes*/
    @media only screen and (max-width: 600px) {

        .fighter-list-item {
            width: 100%;
            display:inline-block;
            text-align:left;
        }

        .list-body {
            top: 40px;
            left: 80px;
            padding: 2px;
            padding-left: 4px;
        }
        .footer-button {
            float:left;
            width: 50%;
        }

        .footer {
            left: 80px;
        }
    }

    @media only screen and (min-width: 601px) {
        
        .fighter-list-item {        
            width:33%; 
            display:inline-block;
        }

        .list-body {
            top: 3em;
            left: 10vw;
        }

        .footer {
            left: 10vw;
        }
    }

    .header-checkbox {
        margin-top: 5px;
        width: 20px;
        height: 20px;
    }

    
    .header-button {
        border-radius: 5px;
        font-size: 1em;
    }

    .footer {
        display: block;
        position: fixed;
        right:0;
        bottom: 0px;
        background-color: #b4b4b4;
        border-top-style: solid;
        border-top-color: rgb(98, 86, 206);
        padding-top: 5px;
        padding-bottom: 5px;
        text-align:center;
        height: 20px;
        box-shadow: 0px -2px 3px rgb(111, 99, 224);
    }

</style>


