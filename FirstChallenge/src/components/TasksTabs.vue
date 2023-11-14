<script setup lang="ts">
  import TabWithoutComment from './TabWithoutComment.vue';
  import TabWithComment from './TabWithComment.vue';

  import {ref} from 'vue'
  // handles to open and close different parts of the accordion  
  const handle1 = ref(false)
  const handle2 = ref(false)
  const handle3 = ref(false)

  // one function to handle the click event to open or close the accordion tabs
  const toggleTab =  (handle: number) => {
    if (handle === 1) {
      handle1.value = !handle1.value;
    }else if (handle === 2) {
      handle2.value = !handle2.value;
    } else if (handle === 3) {
      handle3.value = !handle3.value;
    }
  }
</script>

<template>
  <div class="p-5 relative">
      <div class="absolute w-4/5 -top-1.5 -left-1 h-2 bg-yellow-300 rounded"></div>
      
        <h2 class="font-medium text-2xl mb-5">Tasks</h2>

        <div class="divide-y-2" >
          <TabWithoutComment @click.prevent="toggleTab(1)" id="one" title="2.3 Body Shop" />

          <div class="divide-y-2" v-if="handle1">
            <TabWithoutComment @click.prevent="toggleTab(2)" id="two" title="2.3.1 General Work Shop Area" secondary="true"/>
            
            <div class="divide-y-2" v-if="handle2">
              <TabWithComment id="three" title="2.3.1.3 Are all the work bays clearly marked?" comments="6" pictures="4" details="DETAILS" extraMessage="Add your comment here..."/>
              <TabWithComment id="four" title="2.3.1.3 Are all the work bays clearly drunk?" comments="0" pictures="2" enabled="enabled" />
            </div>

          </div>
          <div class="divide-y-2">
            <TabWithoutComment @click.prevent="toggleTab(3)" id="five" title="Custom questions" />
            
            <div class="CommentTab" v-if="handle3">
              <TabWithComment id="six" title="What brand of car paint is being used?" comments="6" pictures="2" />
            </div>
            
          </div>
        </div>
      </div>
</template>