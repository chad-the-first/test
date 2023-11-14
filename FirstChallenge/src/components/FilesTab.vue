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
  <h2 class="p-5 font-medium text-2xl mb-5">Files</h2>
  <div class="px-5 flex flex-row">
    <img class="w-52 h-52 rounded-xl mr-5" :src="image"/>
    <img class="w-52 h-52 rounded-xl mr-5" :src="image"/>
    <img class="w-52 h-52 rounded-xl mr-5" :src="image"/>
    <img class="w-52 h-52 rounded-xl mr-5" :src="image"/>
    <img class="w-52 h-52 rounded-xl mr-5" :src="image"/>
    <img class="w-52 h-52 rounded-xl mr-5" :src="image"/>
    <img class="w-52 h-52 rounded-xl mr-5" :src="image"/>
    <img class="w-52 h-52 rounded-xl mr-5" :src="image"/>
  </div>
</template>
