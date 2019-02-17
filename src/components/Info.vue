<template>
<div>
    <div class="info-container info-container-x">
        <h3>App built by:
            <br />Tyler Scarff</h3>
        <p>/u/BroDudeIII on reddit</p>
        <h3> Character portraits courtesy of /u/NightTide9 on reddit</h3>
        <p>Follow <a href="https://twitter.com/EvernightStudio">@EvernightStudio</a> on Twitter for more amazing artwork!</p>
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
        margin-top: 1vh;
        background-color: #b3b3b3;
        color: black;
        border-style: solid;
        border-radius: 10px;
        border-width: 5px;
        border-color: black;
    }

@media only screen and (max-width: 800px) {
  .info-container-x {
        margin-left: 5vw;
        width: 80%;
    }

    p {
        font-size: .8em;
    }
    h3 {
        font-size: 1.1em;
    }
}

@media only screen and (min-width: 800px) {
  .info-container-x {
        margin-left: 5vw;
        width: 80vw;
    }
}

    
</style>
