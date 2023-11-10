<script lang="ts">
import image from './images/2022521_univ_sqr_lg.jpg'

export default {
  data: function () {
    return {
      image: image
    }
  }
}
</script>

<template>
    <div class="files">
        <h2>Files</h2>
        <img :src="image"/>
        <img :src="image"/>
        <img :src="image"/>
        <img :src="image"/>
        <img :src="image"/>
        <img :src="image"/>
        <img :src="image"/>
        <img :src="image"/>

    </div>
</template>

<style scoped>
.files {
    margin-top: 80px;
    margin-left: 20px;
    white-space: nowrap;
}
h2 {
    margin-bottom: 30px;
    font-weight: 500;
}

img {
    height: 200px;
    width: 200px;
    border-radius: 25px;
    margin: 0 10px;
}
</style>