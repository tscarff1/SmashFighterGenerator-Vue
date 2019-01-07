<template>
<div>
    <div class="info-container info-container-x">
        <h3>App built by Tyler Scarff</h3>
        <p>/u/BroDudeIII on reddit</p>
        <br />
        <h3> Character portraits courtesy of /u/NightTide9 on reddit</h3>
        <p>Follow <a href="https://twitter.com/EvernightStudio">@EvernightStudio</a> on Twitter for more amazing artwork!</p>
        <br />
        <h3>Smash Bros Ultimate © Nintendo / HAL Laboratory, Inc.</h3>
        <p>Thanks for such an amazing game!</p>
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .info-container {
        
        margin-top: 5vh;
        height: 90vh;
        background-color: #b3b3b3;
        color: black;
        border-style: solid;
        border-radius: 10px;
        border-width: 5px;
        border-color: black;
    }

@media only screen and (max-width: 320px) {
  .info-container-x {
        margin-left: 3vw;
        width: 60vw;
    }
}

@media only screen and (min-width: 321px) {
  .info-container-x {
        margin-left: 5vw;
        width: 80vw;
    }
}

    
</style>
