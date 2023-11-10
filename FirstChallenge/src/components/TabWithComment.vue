<script lang="ts">
export default {
  props: ['id', 'title', 'comments', 'pictures', 'enabled', 'details', 'extraMessage']
}   
</script>

<template>
    <div class="commentTab">
        <input type="checkbox" :id='id' />
        <label :for='id'>
            {{ title }}
            <button><font-awesome-icon class="clickable" :icon="['far', 'comments']" size="lg"/></button>
            <span class="number1">{{ comments }}</span>
            <button><font-awesome-icon class="clickable" :icon="['far', 'images']" size="lg"/></button>
            <span class="number2">{{ pictures }}</span>
            <button class="details">{{ details }}</button>
        </label>
        <br>
        <div class="commentArea">
            <input type="text" placeholder="Add your coment here..."/>
            <button><font-awesome-icon :icon="['fas', 'camera-retro']" size="lg"/></button>
            <button><font-awesome-icon :icon="['far', 'thumbs-up']" size="lg"/></button>
            <button><font-awesome-icon :icon="['far', 'thumbs-down']" size="lg"/></button>
            <button :class="enabled">SAVE</button>
            <div class="extraComment" v-if="extraMessage">{{ extraMessage }}</div>
        </div>
    </div>
</template>

<style scoped>
.commentTab {
    margin-top: 10px;
    border-bottom: 1px solid #000;
}

input[type=checkbox] {
    margin-top: 20px;
    margin-right: 15px;
    width: 18px;
    height: 18px;
}

label {
    position: relative;
    top: -3px;
    font-weight: 500;
    margin-left: 40px;
}

label > :first-child {
    margin-left: 10px;
}

label p {
    display: inline-block;
    margin: 0;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: var(--blue);
}

button:hover {
    cursor: pointer;
}

button {
    background-color: transparent;
    color: #707070;
    border: none;

}

/* number of comments and pictures */
.number1, .number2 {
    display: inline-block;
    text-align: center;
    width: 15px;
    height: 15px;
    font-size: 12px;
    background-color: var(--blue);
    color: #fff;
    border-radius: 50%;
    position: relative;
    left: -10px;
    top: -11px;
}
.number1 {
    left: -15px;
}

/* detail button next to comments and pictures */
.details {
    font-size: 14px;
    font-weight: 600;
    color: var(--blue);
}

.commentArea {
    position: relative;
}
.commentArea > :nth-child(2) {
    position: absolute;
    top: 32px;
    left: 560px;
}
.commentArea > :nth-child(3) {
    margin: 0 10px;
}

input[type=text] {
    margin-top: 15px;
    font-size: 18px;
    font-weight: 700;
    margin-left: 80px;
    width: 500px;
    height: 50px;
    border-radius: 12px;
    padding-left: 15px;
    color: rgb(140, 140, 140);;
    z-index: 1;
}

::placeholder {
    color: #bababa;
}


/* enabled or disabled save button */
.enabled, .disabled {
    display: inline-block;
    margin-left: 20px;
    font-size: 16px;
    font-weight: 500;
    background-color: rgb(200, 200, 200);
    color: #3d3d3d;
    padding: 10px 15px;
    border: 1px solid #3d3d3d;
    border-radius: 18px;
    margin-bottom: 30px;
}

.enabled {
    background-color: var(--blue);
    color: #fff;

}

/* extra text above the comment input field */
.extraComment {
    position: absolute;
    left: 100px;
    top: 7px;
    font-size: 12px;
    border: 1px solid #d3d3d3;
    background-color: #fff;
}
</style>