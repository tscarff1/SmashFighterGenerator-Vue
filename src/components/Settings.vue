<template>
<div>
    <div class="view-header">
        <div class="view-header-item"> SETTINGS </div>
    </div>
    <div class="body">
        <div class="section-header">List Settings</div>
        <div class="section-body">
            <div class="setting-card">
                <label class="setting-label">View:</label> <br />
                By Number <input type="radio" v-model="$store.state.settings.listView" value="NUMBER"/>
                By Series <input type="radio" v-model="$store.state.settings.listView" value="SERIES"/>
            </div>
        </div>
        More settings are coming soon!
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.body {
    padding-top: 10px;
    color: lightgray;
}

.section-header {
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
}

.section-body {
    padding: 10px;
    text-align: left;
}

.setting-label {
    font-weight: bold;
    font-size: 1.2rem;
}

.setting-card {
    border-radius: 5px;
    border-style: solid;
    border-color:rgb(175, 175, 175);
    padding: 5px;
    width: fit-content;
}
</style>
