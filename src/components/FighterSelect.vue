<template>
    <div>
        <button @click="toggleSelect" :class="{'unchecked': !selected, 'checked': selected}">
            {{text}}
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
        width: 300px;
        height: 5vh;
        border-style: solid;
        border-width:4px;
        border-radius: 8px;
        font-size: 1.1em;
        
        border-color: rgb(98, 86, 206);
    }

    img {
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
        color: rgb(98, 86, 206);
    }
</style>
