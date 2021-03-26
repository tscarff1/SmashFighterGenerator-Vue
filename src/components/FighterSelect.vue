<template>
    <div>
        <button @click="toggleSelect" :class="{'unchecked': !selected, 'checked': selected}">
            <div class="btn-text">
                {{text}}
            </div>
            <img v-if="selected" src="@/assets/smash-icon.png">
        </button>
    </div>
</template>
<script>
export default {
    //Usually adding v-model on a component is the same as adding ':value=<val> @input="(emittedVal) => val = emittedVal"'
    props: {
        value: { //The value of this specific checkbox
            type: Array, required: true
        },
        fighterId: {
            default: []
        },
        text: {
            type: String, required: true
        }
    },
    data() {
        return {
            fighters: []
        }
    },
    methods: {
        toggleSelect() {
            if(this.selected) {
                this.fighters.splice(this.fighters.indexOf(String(this.fighterId)),1);   
            } else {
                this.fighters.push(String(this.fighterId));
            }

            this.$emit('input', this.fighters);
        }
    },
    computed: {
        selected() {
            return this.fighters.includes(String(this.fighterId));
        }
    },
    created() {

    },
    watch: {
        value: {
            handler (newVal) {
                this.fighters = newVal;
            },
            deep: true,
            immediate: true
        }
    }
}
</script>
<style scoped>
    button {
        width: 70vw;
        height: 10vw;
        border-style: solid;
        border-width:4px;
        border-radius: 8px;
        font-size: .9em;
        border-color: rgb(98, 86, 206);
    }

    
    .btn-text {
        width: 100%;
        display:inline-block;
    }

    img {
        margin-left: -20px;
        width: 20px;
        height: auto;
        float:right;
    }

    .unchecked {
        background-color: rgb(48, 48, 48);
        color: white;
    }

    .checked {
        background-color: rgb(221, 221, 221);
        font-weight: bold;
        font-size: 1em;
        color: rgb(98, 86, 206);
    }

    @media only screen and (min-width: 800px) {
        button {
            width: 25vw;
            padding: .2vw;
            padding-left: .5vw;
            padding-right: .5vw;
            height: 3vw;
            min-height: 40px;
        }

        .checked {
            background-color: rgb(221, 221, 221);
            font-weight: bold;
            font-size: 1.1em;
            color: rgb(98, 86, 206);
        }
        img {
            margin-left: -25px;
            width: 25px;
            height: auto;
            float:right;
        }
    }
</style>
