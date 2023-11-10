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
            <font-awesome-icon class="clickable" :icon="['far', 'comments']" size="lg"/>
            <span class="number1">{{ comments }}</span>
            <font-awesome-icon class="clickable" :icon="['far', 'images']" size="lg"/>
            <span class="number2">{{ pictures }}</span>
            <p class="details clickable">{{ details }}</p>
        </label>
        <br>
        <div class="commentArea">
            <input type="text" placeholder="Add your coment here..."/>
            <font-awesome-icon class="clickable" :icon="['fas', 'camera-retro']" size="lg"/>
            <font-awesome-icon class="clickable" :icon="['far', 'thumbs-up']" size="lg"/>
            <font-awesome-icon class="clickable" :icon="['far', 'thumbs-down']" size="lg"/>
            <div :class="enabled" class="clickable">SAVE</div>
            <div class="extraComment" v-if="extraMessage">{{ extraMessage }}</div>
        </div>
    </div>
</template>

<style scoped>

.clickable:hover {
    cursor: pointer;
}
.commentTab {
    margin-top: 10px;

    border-bottom: 1px solid #000;
}

label {
    position: relative;
    top: -3px;
    font-weight: 500;
    margin-left: 40px;
}

label > :first-child {
    margin: 0 10px;
}

label p {
    display: inline-block;
    margin: 0;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
    color: var(--blue);
}

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
    left: -22px;
}

input[type=checkbox] {
    margin-top: 20px;
    margin-right: 15px;
    width: 18px;
    height: 18px;
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

.enabled, .disabled {
    display: inline-block;
    margin-left: 20px;
    font-size: 16px;
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

.extraComment {
    position: absolute;
    left: 100px;
    top: 7px;
    font-size: 12px;
    border: 1px solid #d3d3d3;
    background-color: #fff;
}
</style>