<template>
<div class="series-container">
    <div class="series-row" @click="toggleShow">
        <h3 class="series-text">{{series.name}}</h3>
        <span class="series-button" v-if="showFighters" > <font-awesome-icon icon="angle-up"></font-awesome-icon></span>
        <span class="series-button" v-if="!showFighters" @click="toggleShow"> <font-awesome-icon icon="angle-down"></font-awesome-icon></span>
    </div>
        <transition name="slideFighters" >
            <div v-if="showFighters" class="fighters-container"> 
                <div v-for="fighter in fighters" :key="fighter.id" class="fighter-list-item">
                    <fighter-select :id="fighter.id" :fighterId="fighter.id" v-model="$store.state.selectedFighterIds" :text="fighter.name" boxShadow> </fighter-select>
                </div> 
            </div>    
        </transition>
    </div>
</template>

<script>
import  fighterList from '@/assets/data/fighters.json';
import FighterSelect from './FighterSelect';
export default {
    components: {
        FighterSelect
    },
    props: {
        series: Object
    },
    data() {
        return {
            showFighters: true
        }
    },
    methods: {
        toggleShow() {
            this.showFighters = !this.showFighters;
        }
    },
    computed: {
        fighters() {
            let fighters = [];
            for(let fighter of fighterList) {
                if(fighter.series_id == this.series.id)
                    fighters.push(fighter);
            }
            return fighters;
        }
    }
}
</script>

<style scoped>
.series-row {
    width: 100%;
    color: white;
    padding: 2px;
    font-weight: 500px;
    background-color: rgb(94, 46, 170);
    border-bottom-color: rgb(56, 39, 88);
    border-bottom-style: solid;
    border-bottom-width: 3px;
    position: relative;
    box-shadow: 0px 5px 10px #000000;
    
    cursor: pointer;
}

.series-text {
    display: inline-block;
    margin: 5px;
}

.series-button {
    float:right;
    padding-right: 10px;
    font-size: 1.5em;
}


@media only screen and (min-width: 601px) {
        .fighter-list-item {        
            width:33%; 
            display:inline-block;
        }
}

 @media only screen and (max-width: 600px) {
        .fighter-list-item {
            width: 100%;
            display:inline-block;
            text-align:left;
        }
 }

 .fighter-list-item {
     margin-bottom: 10px;
 }

.fighters-container {
    max-height:200px;
    height:auto;
    background-color: rgb(48, 48, 59);
    overflow-y: auto;
    padding: 5px;
    padding-top: 10px;
}

.series-container {
    margin-bottom: 10px;
    box-shadow:0px 10px 10px rgb(87, 72, 114);
}

.slideFighters-enter, .slideFighters-leave-to {
    max-height:0px;
}

.slideFighters-enter-active,.slideFighters-leave-active {
    transition: max-height .2s;
    
    overflow-y: hidden;
}

.slideFighters-enter-to {
    max-height: 200px;
}

.slideFighters-leave {
    max-height: 200px;
}

</style>