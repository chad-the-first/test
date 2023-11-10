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
    <div class="Tasks">
      
        <h2>Tasks</h2>

        <div class="Accordion" >
          <TabWithoutComment @click.prevent="toggleTab(1)" id="one" title="2.3 Body Shop" />

          <div class="AccordionTab2" v-if="handle1">
            <TabWithoutComment @click.prevent="toggleTab(2)" id="two" title="2.3.1 General Work Shop Area"/>
            
            <div class="CommentTab" v-if="handle2">
              <TabWithComment id="three" title="2.3.1.3 Are all the work bays clearly marked?" comments="6" pictures="4" details="DETAILS" enabled="disabled" extraMessage="Add your comment here..."/>
              <TabWithComment id="four" title="2.3.1.3 Are all the work bays clearly drunk?" comments="0" pictures="2" enabled="enabled" />
            </div>

          </div>
        </div>
        <div class="QuestionTab">
          <TabWithoutComment @click.prevent="toggleTab(3)" id="five" title="Custom questions" />
          
          <div class="CommentTab" v-if="handle3">
            <TabWithComment id="six" title="What brand of car paint is being used?" comments="6" pictures="2" enabled="disabled" />
          </div>

        </div>
      </div>
</template>

<style scoped>

.Tasks {
  margin-left: 20px;
}

h2 {
  margin-bottom: 30px;
  font-weight: 500;
}

.AccordionTab2 > :first-child > :nth-child(2) {
  margin-left: 10px;
}

</style>