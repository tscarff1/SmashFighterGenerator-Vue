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
    //But by specifying the model object, we change it to ':fighters=<val> @change="(emittedVal) => val = emittedVal"'
    //I'm doing this because I like 'change' better than input
    //... and, more importantly, we are using value for the value of this particular 'checkbox'
    model: {
        prop: 'fighters',
        event: 'change'
    },
    props: {
        value: { //The value of this specific checkbox
            type: Number, required: true
        },
        fighters: {
            default: []
        },
        text: {
            type: String, required: true
        }
    },
    methods: {
        toggleSelect() {
            if(this.selected) {
                this.fighters.splice(this.fighters.indexOf(this.value),1);   
            } else {
                this.fighters.push(this.value);
            }

            this.$emit('change', this.fighters);
        }
    },
    computed: {
        selected() {
            return this.fighters.includes(this.value);
        }
    }
}
</script>
<style scoped>
    button {
        width: 70vw;
        height: 8vw;
        border-style: solid;
        border-width:4px;
        border-radius: 8px;
        font-size: 1em;
        border-color: rgb(98, 86, 206);
    }

    @media only screen and (min-width: 800px) {
        button {
            width: 25vw;
            padding: 2vh;
            height: 3vw;
        }
        
    }
    .btn-text {
        width: 100%;
        display:inline-block;
    }

    img {
        margin-left: -25px;
        width: 25px;
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
        font-size: 1.1em;
        color: rgb(98, 86, 206);
    }
</style>
