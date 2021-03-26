<template>
    <div>
        <div class="header header-height">
            <div class="header-item">
               
                <label >Select Fighters</label>
            </div>
        </div>
        <div style="height:100%; overflow:hidden; margin:0;">
            <div class="list-body">
                <div v-for="fighter in fighters" :key="fighter.name" class="fighter-list-item" >
                        {{fighter.name}}
                        <input class="list-checkbox" type="checkbox" :id="fighter.id" :value="fighter.id" v-model = "$store.state.selectedFighterIds">
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
export default {
    data() {
        return {
            fighters: fighterList,
            selectedIds: []
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
    }


    .list-checkbox {
        width: 20px;
        height: 20px;
        float:right;
    }

    .list-body {
        display: block;
        overflow-y: auto;
        position: fixed;
        bottom: 20px;
        right: 0px;
    }

    .header {
        background-color: #b4b4b4;
        border-bottom-style: solid;
        border-bottom-color: rgb(98, 86, 206);
        margin-bottom: 1vw;
        padding-bottom: 5px;
        font-size: 1.3em;
        box-shadow: 0px 2px 3px rgb(111, 99, 224);
    }
    /* Handle refresh button on different screen sizes*/
    @media only screen and (max-width: 600px) {
        .header-height {
            height: 30px;
        }

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
        .header-height {   
            height: 1.5em;
        }

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

    .header-item {
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 5px;
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


