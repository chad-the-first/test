<script setup lang="ts">
import HeaderTab from './components/TheHeader.vue'
import TasksTabs from './components/TasksTabs.vue'
import FilesTab from './components/FilesTab.vue'
</script>

<template>
  <header>
    <HeaderTab />
  </header>

  <main>
    <TasksTabs />
    <FilesTab />
  </main>

</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  position:sticky;
  width: 100%;
  justify-content: space-between;
  line-height: 1.5;
  border-bottom: 1px solid #000;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: row;
  }
}
</style>
