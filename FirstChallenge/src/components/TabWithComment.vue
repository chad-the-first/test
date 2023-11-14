<script lang="ts">
export default {
  props: ['id', 'title', 'comments', 'pictures', 'enabled', 'details', 'extraMessage']
}   
</script>

<template>
    <div class="grid grid-rows-2 px-4 py-5">
        <div>
            <input class="w-4 h-4 relative top-0.5 mr-12" type="checkbox" :id='id' />
            <label class="text-sm text-slate-500 ml-5 py-8" :for='id'>
                {{ title }}
                <button class="ml-2"><font-awesome-icon class="clickable" :icon="['far', 'comments']" size="lg"/></button>
                <span class="relative -left-2 -top-2 px-1 text-white bg-blue-700 rounded-full text-xs">{{ comments }}</span>
                <button><font-awesome-icon class="clickable" :icon="['far', 'images']" size="lg"/></button>
                <span class="relative -left-2 -top-2 px-1 text-white bg-blue-700 rounded-full text-xs">{{ pictures }}</span>
                <button class="text-blue-700">{{ details }}</button>
            </label>
        </div>
        <div class="relative ml-12 pl-8">
            <input class="px-4 py-2.5 border-2 rounded-xl w-1/3" type="text" placeholder="Add your coment here..."/>
            <button class="relative -left-8"><font-awesome-icon :icon="['fas', 'camera-retro']" size="lg"/></button>
            <button class="relative -left-2 mr-2"><font-awesome-icon :icon="['far', 'thumbs-up']" size="lg"/></button>
            <button><font-awesome-icon :icon="['far', 'thumbs-down']" size="lg"/></button>
            <button class="ml-4 px-4 py-2 bg-slate-300 text-slate-700 rounded-2xl" :class="{'text-white bg-blue-800': enabled}">SAVE</button>
            <div class="absolute -top-2 left-10 text-xs border bg-white" v-if="extraMessage">{{ extraMessage }}</div>
        </div>
    </div>
</template>

