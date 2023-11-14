<script lang="ts">
export default {
  props: ['title', 'id', 'secondary'],
}   
</script>

<template>
    <div class="px-4 py-5">
          <input class="w-4 h-4 relative top-0.5 mr-3" type="checkbox" :id='id'/>
          <label :class="{'pl-4': secondary}" class="font-semibold text-slate-500" :for='id'>
            <span class="mr-3">
                <font-awesome-icon class="chevron" :icon="['fas', 'chevron-down']" />
            </span>
            {{ title }}
        </label>
    </div>
</template>