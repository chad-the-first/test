<script lang="ts">
export default {
  props: ['title', 'id'],
}   


</script>

<template>
    <div class="mainTab">
          <input type="checkbox" :id='id'/>
          <label :for='id'><font-awesome-icon class="chevron" :icon="['fas', 'chevron-down']" />{{ title }}</label>
    </div>
</template>

<style scoped>
.mainTab {
    font-weight: 700;
    border-bottom: 2px solid #909090;
    height: 60px;
    z-index: 1;
    cursor: pointer;
}
input[type=checkbox] {
    margin-top: 20px;
    margin-right: 15px;
    width: 18px;
    height: 18px;
    z-index: 2;
}

label {
    position: relative;
    top: -2px;
}
.chevron {
    margin-right: 10px;
}

</style>